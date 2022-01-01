// Write code to create a function that accepts a string and returns the string in camelCase

var camelCase = function(str) {
    var array = str.split(" ")
    var resultArray = []

    for (var i=0; i<array.length; i++) {
        var wordLowerCased = array[i].toLowerCase();
        var firstCamel = array[i][0].toUpperCase()
        var restOfWord = wordLowerCased.slice(1, wordLowerCased.length)

        if (i === 0) {
            resultArray.push(wordLowerCased)
        }

        if (i > 0) {
            var cammelCasedWord = firstCamel+restOfWord
            resultArray.push(cammelCasedWord)
        }
    }
    console.log(resultArray)
    return resultArray.join("")
};

// Tried to do the way Solution folder solved it
// var camelCase = function(str) {
//     var result = "";
//     var words = str.toLowerCase().split(" ");

//     for (var i = 0; i < words.length; i++) {
//         var word = words[i]
//         var letters = word.split("")
//         // console.log(word)

//         if (i > 0) {
//             letters[0] = letters[0].toUpperCase();
//             // result += letters
//             // console.log(letters)
//         }
//         // else if (i === 0) {
//         //     result += letters
//         // }
//         result += letters.join("")

//     }
//     // console.log(result)
//     console.log(result)
//     return result
// }
