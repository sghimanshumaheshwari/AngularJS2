var Calc = (function () {
    function Calc() {
        console.log('this is the constructor called');
    }
    Calc.prototype.sum = function (num1, num2) {
        var _sum;
        _sum = num1 + num2;
        console.log(_sum);
        return (num1 + num2);
    };
    return Calc;
}());
var c = new Calc();
c.sum(10, 40);
