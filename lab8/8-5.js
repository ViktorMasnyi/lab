(function () {
    var x = [3, 5, -3, 0, 9, -2],  //проверка 1
    //var x = [3, 5, 1, 0, 9, -2],     //проверка 2  
        maxPos,
        minPos,
        max = -Infinity;
        min = +Infinity;       

        for (var i = 0; i <= x.length - 1; i++) {
            
                if (x[i] > max) {
                    max = x[i];
                    maxPos = i;
                }
                if (x[i] < min) {
                    min = x[i];
                    minPos = i;
                }
        }

        if (maxPos % 2 == 0 && minPos % 2 == 0) {
            tmp = x[maxPos];
            x[maxPos] = x[maxPos -1];
            x[maxPos - 1] = tmp;
        }
        else {
            if (x.length % 2 == 0) {
                for (i = 0; i <= (x.length / 2) - 1; i++) {
                    tmp = x[i];
                    x[i] = x[x.length - 1 - i];
                    x[x.length - 1 - i] = tmp;
                }
            }
        }
    
    document.write('result array: ' + x);
})()
