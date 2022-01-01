// Write code to create a function takes a string and returns a new string with the first letters of each word capitalized

var titleCase = function(str) {
    var strArr = str.split(" ")
    var newArr = []
  
    for (var i = 0; i < strArr.length; i++) {
        var capitalized = strArr[i][0].toUpperCase()

        var currentWord = strArr[i].slice(1)

        Str = (capitalized+currentWord)
        newArr.push(Str)
    }

    var newStr = newArr.join(" ")
    return newStr
};
