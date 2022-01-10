// Write code to create a function that accepts two arrays of numbers
// There will be one number common to both arrays
// Return the common number
// You may not use the `indexOf` or `includes` method

var commonElement = function(arrA, arrB) {
    var result = null

    for (var i = 0; i < arrA.length; i++) {
        var currentA = arrA[i]

        for (var k = 0; k < arrB.length; k++) {
            var currentB = arrB[k]
            if (currentA === currentB) {
                result = currentB
            }
        }
    }

    return result
};
