chrome.contextMenus.create({
    id: "menuEditPage",
    title: "QuickEdit",
    contexts: ["all"]
})

chrome.contextMenus.onClicked.addListener(function () {
    chrome.tabs.executeScript(null, {
        code: "document.body.contentEditable;"
    }, function (callback) {
        chrome.tabs.executeScript(null, {
            code: `document.body.contentEditable = ${callback[0] !== "true"};`
        })
    })
})

chrome.commands.onCommand.addListener(function (cmd) {
    if (cmd === "commandEditPage") {
        chrome.tabs.executeScript(null, {
            code: "document.body.contentEditable;"
        }, function (callback) {
            chrome.tabs.executeScript(null, {
                code: `document.body.contentEditable = ${callback[0] !== "true"};`
            })
        })
    }
})