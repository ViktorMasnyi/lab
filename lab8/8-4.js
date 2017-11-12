(function() {    
    var input = prompt('input your card number'),
        card = parseInt(input),
        nDigits = Math.log10(card) + 1 | 0, //valid for positive integers
        cardType = 'INVALID';
   
    if (nDigits == 15 && (card >= 340000000000000 || card >= 370000000000000)) {
        cardType = 'AMEX';
    }
    else if (nDigits == 16 && (card >= 5100000000000000 || card >= 5200000000000000 || card >= 5300000000000000 
            || card >= 5400000000000000 || card >= 5500000000000000)) {
        cardType = 'MASTERCARD';
    }
    else if ((nDigits == 13 || nDigits == 16) && (card >= 4000000000000000 || card >= 4000000000000)) {
        cardType = 'VISA';
    }    
    function luhnCheck(val, nDigits) {
        var sum = 0;
        if (nDigits % 2 == 0) {
            for (var i = 0; i <= val.length - 1; i++) {   // working with even numbers of CC
                var intVal = parseInt(val.substr(i, 1));
                if (i == 0 || (i % 2 == 0)) {
                    intVal *= 2;
                    if (intVal > 9) {
                        intVal = 1 + (intVal % 10);
                    }
                }
                sum += intVal;
            }
        }
        else {
            for (var i = 0; i <= val.length - 1; i++) {   // working with odd numbers of CC
                var intVal = parseInt(val.substr(i, 1));
                if (i % 2 != 0) {
                    intVal *= 2;
                    if (intVal > 9) {
                        intVal = 1 + (intVal % 10);
                    }
                }
                sum += intVal;
            }
        }
        
        if (sum % 10 == 0) return cardType;
        else return 'INVALID';
    }

    document.write(luhnCheck(input, nDigits));
   
})();
