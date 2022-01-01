// Write code to create a function that accepts a string (`str`) and returns the longest word in the string

var longestWord = function(str) {
    var newArr = str.split(" ")
    var longestWord = ""

    for (var i = 0; i < newArr.length; i++) {
        var currentArr = newArr[i]

        var currentLength = currentArr.length

        if (longestWord.length < currentLength){
            longestWord = currentArr
        }
    }

    return longestWord
};
