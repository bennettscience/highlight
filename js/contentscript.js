var serializedRange;

// Serializes and returns a specified range
// Ignores the range if the length is zero
function serializeRange(range) {
    return (!range || (range.startOffset === range.endOffset)) ? null : {
        startContainer: range.startContainer,
        startOffset:    range.startOffset,
        endContainer:   range.endContainer,
        endOffset:      range.endOffset
    };
}

// Restores the specific serialized version
// by removing any ranges currently selected
function restoreRange(serialized) {
    var range = document.createRange();
    range.setStart(serialized.startContainer, serialized.startOffset);
    range.setEnd(serialized.endContainer, serialized.endOffset);
    
    var sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
}

// Highlights the current selected range OR removes
// highlight from a previously selected range
function toggleHilite() {
    document.designMode = "on";
    
    var sel = window.getSelection();
    if (serializedRange) {
        restoreRange(serializedRange);
        serializedRange = null;
        document.execCommand('removeFormat', false, null);
        sel.removeAllRanges();
    } else {
        // There is no highlighted range, add highlight
        // to the current range if there is one
        if (sel.rangeCount && sel.getRangeAt) {
            document.execCommand('hiliteColor', false, '#FFFF00');
            serializedRange = serializeRange(sel.getRangeAt(0));
            // serializes the range after the highlight is added
            // `execCommadn1 changes the DOM, which afects the
            // range's start-/endContainer and offsets.
        }
    }

    document.designMode = "off";
   
}; 

toggleHilite();
