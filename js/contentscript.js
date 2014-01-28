chrome.runtime.onMessage.addListener( 
    function(request, sender, sendResponse) {     
        if (request.method == "getSelection") 
            sendResponse({data: window.getSelection().toString()});
        else sendResponse({});
        }
)

chrome.runtime.onMessage.addListener(
    function addClass() {
        if (request.method == "getSelection") {
            var newSpan = document.createElement('span');
            newSpan.setAttribute('class','hiliteNode');
            document.getElementById('text').appendChild(newSpan);
            newSpan.innerHTML = selectedText;
        }
        else return
    }
)