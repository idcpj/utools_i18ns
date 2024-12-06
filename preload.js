
window.query_i18n = (query,callbackSetList) => {

    const https = require('https')

    const data = `{
    "query": {
        "simple_query_string": {
            "query": "${query}",
            "fields": [
                "translations.zh"
            ],
            "minimum_should_match": "100%",
            "default_operator": "AND",
            "analyzer": "standard"
        }
    },
    "size": 12,
    "highlight": {
        "fields": {
            "translations.zh": {}
        }
    },
    "_source": [
        "name",
        "confidence",
        "domain",
        "format",
        "platform",
        "counts",
        "translations.*"
    ]
}`


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
            callbackSetList(data)

        })
    })

    req.on('error', error => {
        console.error(error)
    })

    req.write(data)
    req.end()

};


utools.onPluginEnter(({code, type, payload, option}) => {
    utools.setSubInput(({ text }) => {
        window.searchProxy.searchWord = text;
      }, '搜索')


    const index=['text','regex','over'];
    if(index.includes(type)){
        utools.setSubInputValue(payload);
        window.searchProxy.searchWord = payload;
    }
 
})

