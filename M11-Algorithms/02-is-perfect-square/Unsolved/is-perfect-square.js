// Write code to create a function that accepts a number and returns true if the number is a perfect square, otherwise it returns false.
// You may not use the built-in Math.sqrt method

var isPerfectSquare = function(num) {
    var result = false
    if (num === 0 || num === 1) {
        return true
    }
    
    for (var i=1; i<num/2; i++) {
        if (num / i === i) {
            result = true
        }
    }
    
    return result
};

// num divided by i must equal i
// 
