function getText(tabs) {
    var text = document.getSelection().toString();
    console.log(text);
}



// This script is from Tim Downs as posted to Stack Overflow
// http://stackoverflow.com/a/1623974/2278429

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
makeEditableAndHighlight();
getText();