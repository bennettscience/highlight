/* chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {     
        if (request.method == "getSelection") 
            sendResponse({data: window.getSelection().toString()});
        else sendResponse({});
        }  
) */

function getText(tabs) {
    var text = window.getSelection().toString();
    alert(text)
    var selection = window.getSelection().getRangeAt(0);
    var selectedText = selection.extractContents();
    var span = document.createElement("span");
    span.style.backgroundColor = "yellow";
    span.appendChild(selectedText);
    span.onclick = function (ev) {
        this.parentNode.insertBefore(
            document.createTextNode(this.innerHTML),
            this
        );
        this.parentNode.removeChild(this);
    }
    selection.insertNode(span);
}

getText();
