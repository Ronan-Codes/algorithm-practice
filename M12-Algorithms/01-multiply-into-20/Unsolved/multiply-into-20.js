// Write code to create a function that accepts an array of unique numbers
// If any two numbers in the array add up to 20, return true, else return false

var multiplyInto20 = function(arr) {
    var result = false;
    // const arrCopy = arr
    // console.log(arrCopy)

    for (var i = 0; i < arr.length; i++) {
        var currentNum = arr[i]
        
        

        for (var k = i+1; k < arr.length; k++) {
            if (currentNum * arr[k] === 20) {
                return true
            }
        }        
    }

    return result
};
