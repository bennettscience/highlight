/* chrome.browserAction.onClicked.addListener(function() {
    chrome.tabs.query({active: true, windowId: chrome.windows.WINDOW_ID_CURRENT}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {method: "getSelection"}, function(response){
            sendServiceRequest(response.data);
        });
    });
}); */

// When the argument length is two, it is coming from the
// context menu. A single argument is from the browser action.
// Shared from http://stackoverflow.com/q/6499471/2278429
function runHighlight() {
    var tab = arguments.length == 2 ? arguments[1] : arguments[0];
    chrome.tabs.executeScript(null, {file: 'js/content.js'})
}

// Browser action command
chrome.browserAction.onClicked.addListener(runHighlight);

// Context menu command
/*chrome.contextMenus.create({
    title: "Hilight this!",
    contexts: ['selection'],
    onclick: runHighlight
});*/

