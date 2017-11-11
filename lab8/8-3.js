(function () {
    var QUARTER = 0.25,
        DIME = 0.1,
        NICKEL = 0.05,
        PENNY = 0.01;
    var left = prompt('put ammount here:', 0);

    var nQuarters = 0,
        nDimes = 0,
        nNickels = 0,
        nPennies = 0,
        remains = 0,
        coins = 0;
    
        var makeChange = function(total) {

        var coins = [1,5,10,25];
        var count = 0;

        var a = total;
        while (a >= 0) {
            if ((a - coins[coins.length-1]) < 0) break;
            a -= coins[coins.length-1];            
            count++;
        }
        var b = total - coins[coins.length-1] * count;
        while (b >=0) {
            if ((b - coins[coins.length-2]) < 0) break;
            b -= coins[coins.length-2];            
            count++;
        }
        var c = b;
        while (c >=0) {
            if ((c - coins[coins.length-3]) < 0) break;
            c -= coins[coins.length-3];
            count++;
        }
        var d = c;
        while (d >= 0) {
            if ((d - coins[coins.length-4]) < 0) break;
            d -= coins[coins.length-4];
            count++;
        }
        return count;
        }

    document.write(makeChange(left));

})();
