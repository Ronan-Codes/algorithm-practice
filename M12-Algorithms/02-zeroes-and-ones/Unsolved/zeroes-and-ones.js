// Write code to create a function that accepts a string containing only 0s and 1s
// Return true if there are an equal number of 0s and 1s
// Else return false

var zeroesAndOnes = function(str) {
    var arr = str.split("")
    var ones = 0
    var zeros = 0

    for (var i = 0; i < arr.length; i++) {
        var currentNum = parseInt(arr[i])
        // console.log(currentNum)

        if(currentNum === 1){
            ones += 1
        } 
        else if (currentNum === 0) {
            zeros += 1
        }
    }

    console.log(ones, zeros)

    if (ones === zeros) {
        return true
    }
    else if (ones !== zeros) {
        return false 
    }
};
