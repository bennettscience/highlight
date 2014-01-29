/* chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {     
        if (request.method == "getSelection") 
            sendResponse({data: window.getSelection().toString()});
        else sendResponse({});
        }  
) */

/* function getText(tabs) {
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

getText(); */

function makeEditableAndHighlight(colour) {
    var range, sel = window.getSelection();
    if (sel.rangeCount && sel.getRangeAt) {
        range = sel.getRangeAt(0);
    }
    document.designMode = "on";
    if (range) {
        sel.removeAllRanges();
        sel.addRange(range);
    }
    // Use HiliteColor since some browsers apply BackColor to the whole block
    if (!document.execCommand("HiliteColor", false, '#FFFF00')) {
        document.execCommand("BackColor", false, '#FFFF00');
    }
    document.designMode = "off";
}

/* function highlight(colour) {
    var range;
    if (window.getSelection) {
        // IE9 and non-IE
        try {
            if (!document.execCommand("BackColor", false, '#FFFF00')) {
                makeEditableAndHighlight(colour);
            }
        } catch (ex) {
            makeEditableAndHighlight(colour)
        }
    } else if (document.selection && document.selection.createRange) {
        // IE <= 8 case
        range = document.selection.createRange();
        range.execCommand("BackColor", false, '#FFFF00');
    }
} */

makeEditableAndHighlight();
