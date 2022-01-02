// Write code to create a function that accepts a two-dimensional array
// Each 2D element contains either the string "X" or "O" (both capitalized)
// Return the number of times "X" appears in the 2D array

var arraySearch2D = function(arr) {
    var result = 0

    for (var i=0; i<arr.length; i++) {
        var currentElement = arr[i];

        for (var z=0; z<currentElement.length; z++) {
            if (currentElement[z] === "X") {
                result += 1
            }
        }
    }

    return result
};
