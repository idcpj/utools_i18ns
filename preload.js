

function show(search, callbackSetList){
    const https = require('https')

    let query=search
    const data = `{"query":{"simple_query_string":{"query":"${query}","fields":["translations.zh"],"minimum_should_match":"100%","default_operator":"AND","analyzer":"smartcn"}},"size":12,"highlight":{"fields":{"translations.zh":{}}},"suggest":{"text":"${query}","suggestions":{"phrase":{"field":"translations.zh","real_word_error_likelihood":0.95,"max_errors":1,"gram_size":4,"direct_generator":[{"field":"translations.zh","suggest_mode":"always","min_word_length":1}]}}},"_source":["name","confidence","domain","format","platform","counts","translations.*"]}`

    const lang=["en",]
    const  result=[];
    const options = {
        hostname: 'i18ns.com',
        port: 443,
        path: '/translate/_search',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        }
    }

    const req = https.request(options, res => {
        let data='';

        res.on('data', d => {
            data+=d;
        })

        res.on("end",()=>{
            let data1 = JSON.parse(data);
            let translations = data1.hits.hits.map(hit=>hit._source.translations)

            for (let i = 0; i < lang.length; i++) {

                let filterMap = translations.map(item=>{
                    return item.filter(item=>{
                        return item.lang===lang[i]
                    });
                });


                let fileSet=new Set();
                for (let j = 0; j < 3; j++) {
                    fileSet.add(filterMap[j][0][lang[i]][0].toLowerCase())
                }

                fileSet.forEach(item=>{
                    result.push({
                        title:lang[i],
                        description:item
                    })
                })

            }
            // alert(JSON.stringify(result))

            callbackSetList(result)

        })
    })

    req.on('error', error => {
        console.error(error)
    })

    req.write(data)
    req.end()

}




window.exports = {
    "i18n": { // 注意：键对应的是 plugin.json 中的 features.code
        mode: "list",  // 列表模式
        args: {
            // 进入插件时调用（可选）
            enter: (action, callbackSetList) => {
                show(action.payload,callbackSetList)
            },
            search: (action, searchWord, callbackSetList) => {
                show(searchWord,callbackSetList)

            },
            // 用户选择列表中某个条目时被调用
            select: (action, itemData, callbackSetList) => {
                window.utools.hideMainWindow()
                utools.copyText(itemData.description)
                // window.utools.outPlugin()

            },
            // 子输入框为空时的占位符，默认为字符串"搜索"
            placeholder: "搜索"
        }
    }
}