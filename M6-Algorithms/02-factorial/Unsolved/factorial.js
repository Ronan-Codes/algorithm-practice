// Write code to create a function that returns the factorial of `num`

var factorial = function(num) {
    var total = 1

    if (num === 0 || num === 1) {
        return 1
    }
    else if(num > 1) {
        for (var i = 2; i <= num; i++) {
            total = total * i
        }
        return total
    }
};
