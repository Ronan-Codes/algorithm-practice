// Write code to create a function that accepts a string and returns an object
// The object should contain keys for each character in the string
// Each key should point to an array containing the indexes the character is found in the string

var stringMap = function(str) {
    var result = {}

    for (var i = 0; i < str.length; i++) {
        if(!result[str[i]]) {
            result[str[i]] = [i]
        }
        else {
            result[str[i]].push(i)
        }
    }

    console.log(result)
    return result
};
