var serializedRange;

/* Serializes and returns the specified range
 * (ignoring it if its length is zero) */
function serializeRange(range) {
    return (!range || ((range.startContainer === range.endContainer)
                       && (range.startOffset === range.endOffset)))
            ? null : {
                startContainer: range.startContainer,
                startOffset:    range.startOffset,
                endContainer:   range.endContainer,
                endOffset:      range.endOffset
            };
}

function saveSerializedRange(range) {
    var select = document.get
}

/* Restores the specified serialized version
 * (removing any ranges currently seleted) */
function restoreRange(serialized) {
    var range = document.createRange();
    range.setStart(serialized.startContainer, serialized.startOffset);
    range.setEnd(serialized.endContainer, serialized.endOffset);

    var sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
}

/* Hilites the currently selected range or removes the hilite
 * (if there is a previously serialized range) */
function toggleHilite() {
    document.designMode = 'on';

   var sel = window.getSelection();
   if (serializedRange) {
        //There is a hilited range, let's remove the hilite
        restoreRange(serializedRange);
        serializedRange = null;
        document.execCommand('removeFormat', false, null);
   }
    else { 
        /* There is no hilited range, so hilite
         * the currently selected range (if any) */
        if (sel.rangeCount && sel.getRangeAt) {
            document.execCommand('hiliteColor', false, '#FFFF00');
            serializedRange = serializeRange(sel.getRangeAt(0));
            // it is important to serialize the range *after* hiliting,
            // because `execCommand` will change the DOM affecting the
            // range's start-/endContainer and offsets.
        }
    }

    document.designMode = 'off';
}

toggleHilite();