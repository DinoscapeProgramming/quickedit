document.addEventListener('DOMContentLoaded', function () {
    chrome.tabs.executeScript(null, {
        code: "document.body.contentEditable;"
    }, function (result) {
        document.getElementById('btn').innerHTML = ["Turn on", "Turn off"][Number(result[0] === "true")]
    })
    document.getElementById('btn').addEventListener('click', function () {
        chrome.tabs.executeScript(null, {
            code: `document.body.contentEditable = ${document.getElementById('btn').innerHTML === "Turn on"};`
        }, function (callback) {
            document.getElementById('btn').innerHTML = ["Turn on", "Turn off"][Number(document.getElementById('btn').innerHTML === "Turn on")]
        })
    })
}, false)