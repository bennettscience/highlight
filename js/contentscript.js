// This script is from Tim Downs as posted to Stack Overflow
// http://stackoverflow.com/a/1623974/2278429
// Modified to add an ID to the newly created span

function addSpanId(color) {
    // Gets the selection range
    var range, sel = window.getSelection();
    if (sel.rangeCount && sel.getRangeAt) {
        range = sel.getRangeAt(0);
    }
    // Makes the DOM editable
    document.designMode = "on";
    if (range) {
        sel.removeAllRanges();
        sel.addRange(range);
    }
    // Use HiliteColor since some browsers apply BackColor to the whole block
    // Sets the color of the new span
    if (!document.execCommand("HiliteColor", false, '#FFFF00')) {
        document.execCommand("BackColor", false, '#FFFF00');
    }
    document.designMode = "off";
    
    //Setting an ID for the new span element
    var theChange = document.getSelection().toString();
    
    // Explicitely creating a span element from the selection
    var newSpan = document.createElement('span');
    
    // Setting the ID to something we can serialize
    newSpan.id = "newHL";
    
    // Inserting the selected text into the span element
    newSpan.innerHTML = theChange;
   
}; 

addSpanId();

