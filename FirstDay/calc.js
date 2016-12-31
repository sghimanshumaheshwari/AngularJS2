var Calc = (function () {
    function Calc() {
    }
    Calc.prototype.sum = function (num1, num2) {
        console.log(num1 + num2);
        return (num1 + num2);
    };
    return Calc;
}());
var c = new Calc();
c.sum(10, 20);
