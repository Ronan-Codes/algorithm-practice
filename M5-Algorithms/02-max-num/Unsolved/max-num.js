// Write code to return the largest number in the given array

var maxNum = function(arr) {
    var max = 0;

    for (var i = 0; i < arr.length; i ++) {
        var currentNum = arr[i]; 

        if (currentNum > max) {
            max = currentNum
        }
    }

    return max
};
