function sel() {
    var getText = window.getSelection().toString();
    // console.log(getText);
    localStorage.setItem('getText', JSON.stringify(getText));

    console.log(JSON.parse(localStorage.getItem('getText')));
}

sel();