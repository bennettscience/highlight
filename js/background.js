/* chrome.browserAction.onClicked.addListener(function() {
    chrome.tabs.query({active: true, windowId: chrome.windows.WINDOW_ID_CURRENT}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {method: "getSelection"}, function(response){
            sendServiceRequest(response.data);
        });
    });
}); */

chrome.browserAction.onClicked.addListener(function(tabs) {
    chrome.tabs.executeScript(null, {file: 'js/contentscript.js'})
})
