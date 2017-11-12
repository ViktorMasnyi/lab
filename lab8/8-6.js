window.onload = function () {
    var n = prompt('enter columns number "N"', 0),
        m = prompt('enter rows number "M"', 0),
        manual = +prompt('enter "1" for manual data input, or "0" for auto', 0),
        arrB = [],
        arrD = [];

    function createArrB() {
        for (var i = 0; i < m; i++) { // rows for array
            arrB[i] = new Array(1);
            for (var j = 0; j < n; j++) { //columns for array
                if(!manual) arrB[i][j] = Math.floor((Math.random() * 100) + 1);
                else arrB[i][j] = prompt('enter integer', 0);
            }
        }
        return arrB;
    }

    function createArrD(arr) {
        var minValue = +Infinity;
        for (var j = 0; j < n; j++) { // rows for array            
            for (var i = 0; i < m; i++) { //columns for array
                if (arr[i][j] < minValue) minValue = arrB[i][j];
            }
            arrD[j] = minValue;
            minValue = +Infinity;
        }
    return arrD;
    }
    // WORKING  - NOT UNEVERSAL
    // function createTable(arr, id) { 
    //     var body = document.getElementById(id);
    //     var tbl = document.createElement('table');
    //     tbl.style.width = '100%';
    //     tbl.setAttribute('border', '1');
    //     var tbdy = document.createElement('tbody');
    //     for (var i = 0; i < m; i++) { //m
    //         var tr = document.createElement('tr');
    //         for (var j = 0; j < n; j++) { //n
    //             var td = document.createElement('td');
    //             td.innerHTML = arr[i][j];                
    //             //td.appendChild(document.createTextNode('\u0020'));                
    //             tr.appendChild(td);            
    //         }
    //         tbdy.appendChild(tr);
    //     }
    //     tbl.appendChild(tbdy);
    //     body.appendChild(tbl);
    // } 
    function createTable(arr, id) {
        var n = arr.length;
        var m = arr[0].length;
        var body = document.getElementById(id);
        var tbl = document.createElement('table');
        tbl.style.width = '100%';
        //tbl.setAttribute('border', '1');
        var tbdy = document.createElement('tbody');
        if (m != undefined) {
            for (var i = 0; i < n; i++) { //m
                var tr = document.createElement('tr');
                for (var j = 0; j < m; j++) { //n
                    var td = document.createElement('td');
                    td.innerHTML = arr[i][j];                
                    //td.appendChild(document.createTextNode('\u0020'));                
                    tr.appendChild(td);            
                }
                tbdy.appendChild(tr);
            }
        }
        else {
            var tr = document.createElement('tr');
            for (var j = 0; j < n; j++) { //n
                    var td = document.createElement('td');
                    td.innerHTML = arr[j];                
                    //td.appendChild(document.createTextNode('\u0020'));                
                    tr.appendChild(td);            
                }
                tbdy.appendChild(tr);
            }                
        tbl.appendChild(tbdy);
        body.appendChild(tbl);
    }
    //     function createTableD(arr) {
    //     var body = document.getElementById('body');
    //     var tbl = document.createElement('table');
    //     tbl.style.width = '100%';
    //     tbl.setAttribute('border', '1');
    //     var tbdy = document.createElement('tbody');
    //     for (var i = 0; i < m; i++) {
    //         var tr = document.createElement('tr');
    //         for (var j = 0; j < n; j++) {
    //             var td = document.createElement('td');
    //             td.innerHTML = arrD[i][j];                
    //             td.appendChild(document.createTextNode('\u0020'));                
    //             tr.appendChild(td);            
    //         }
    //         tbdy.appendChild(tr);
    //     }
    //     tbl.appendChild(tbdy);
    //     body.appendChild(tbl);
    // }   
    arrB = createArrB();
    addD = createArrD(arrB);
    //alert(arrD);
    createTable(arrB, 'arrB');
    createTable(arrD, 'arrD');
    //createTable(arrD);
}
