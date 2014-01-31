function addHilite(color) {
    var range, sel = window.getSelection();
    if (sel.rangeCount && sel.getRangeAt) {
        range = sel.getRangeAt(0);
    }
    document.designMode = "on";
    
    if (range) {
        sel.addRange(range);
    };
    
    if (!document.execCommand("hiliteColor", false, "#FFFF00")) {
        document.execCommand("backColor", false, "#FFFF00");
    }
    document.designMode = "off";
    console.log(range);
}

addHilite();