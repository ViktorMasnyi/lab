(function () {
    var x = 0.5;
var res;

res = x / (Math.pow(x,3) + 0.1/(Math.pow(x,3) + 0.01/(Math.pow(x,3) + 0.001)))

document.write(res);
})();
