// Write code to create a function that accepts a string and returns an acronym for the given string

var acronymBuilder = function(str) {
    var newArr = str.split(" ")
    var result = ""

    for (var i=0; i < newArr.length; i++) {
        var word = newArr[i]

        word = word.slice(0,1).toUpperCase()

        result = result + word
    }
    
    return result
};
