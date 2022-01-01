// Write code to create a function that accepts an array numbers
// Return `true` is no number appears in the array more than once, else return `false`

var isUnique = function(arr) {
    var result = true;

    for (var i = 0; i < arr.length; i++) {
        var numTesting = arr[i];

        for (var i = i+1; i < arr.length; i++) {
            if (numTesting === arr[i]) {
                result = false
                return result
            }
        }
    }

    return result
};

// not equal = true
// equal = false
