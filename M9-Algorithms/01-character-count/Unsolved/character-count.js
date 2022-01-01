// Write code to create a function that accepts a string and returns an object containing the number of times each character appears in the string

var characterCount = function(str) {
    var result = {};

    for (var i=0; i<str.length; i ++) {
        var currentLetter = str[i]

        if (!result[currentLetter]) {
            result[currentLetter] = 1
        }
        else if (result[currentLetter] > 0) {
            result[currentLetter] = result[currentLetter] + 1
        }

    }

    console.log(result)
    return result
};
