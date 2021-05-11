


utools.onPluginEnter(({code, type, payload, optional}) => {
    var url="https://i18ns.com/zh/index.html?q="+payload
    url = encodeURI(url)
    // 方式一
    document.querySelector("#goto").src=url

    // 方式二
    // utools.ubrowser.goto(url)
    //     .run({ width: 1000, height: 600 })

})