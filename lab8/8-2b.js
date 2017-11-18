(function () {
    var max = prompt('type number of strings', 1);
    var i = 0, j = 0;
    var space;
    var sharp, sharp2;

    while (i < max) {
        space = '';
        sharp = '';
        sharp2 = '';
        for (j = 0; j < max - i; j++) {
            space += ' ';
        }
        for (j = 0; j <= i; j++) {
            sharp += '#';
        }
        for(j = 0; j <= i; j++) {
            sharp2 += '#';
        }
        console.log(space + sharp + ' ' + sharp2);
        i++;
    }
})();
