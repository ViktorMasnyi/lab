(function () {
    var i = prompt('type number of strings', 1);
    var str = '';

    for( ; i>=0; i--) {
        document.write(str);
        document.write('<br>');
        str += '#';
    }

})();
