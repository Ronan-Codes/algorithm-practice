// Write code to create a function that accepts two strings
// Return true if the second string is a substring of any permutation of the first string
// Else return false

var permutationSubstring = function(str, sub) {
    var result = true
    var subObj = {} 
    var strObj = {}

    for (var i = 0; i < sub.length; i++) {
        subObj[sub[i]] = (subObj[sub[i]] || 0) + 1
    }

    for (var i = 0; i < str.length; i++) {
        strObj[str[i]] = (strObj[str[i]] || 0) + 1
    }

    for (const key in subObj) {
        if (!strObj[key]) {
            return false
        }
        else if (strObj[key] < subObj[key]) {
            return false
        }
        // else if (strObj[key] === subObj[key]) {
        //     result = true
        // }
    }

    console.log(subObj, strObj)
    return result
};
