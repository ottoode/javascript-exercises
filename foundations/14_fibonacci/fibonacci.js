const fibonacci = function (n) {
    if (typeof n === 'string') {
        n = Number(n);
    }
    if (n === 0) return 0;
    if (n < 0) return "OOPS"


    let number1 = 1;
    let number2 = 0;

    for (let i = 0; i < n; i++) {
        let temp = number1 + number2;
        number1 = number2;
        number2 = temp;
    }
    return number2;
};

// Do not edit below this line
module.exports = fibonacci;
