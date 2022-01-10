// Write code to create a function that accepts two strings
// Return true if the second string is a substring of any permutation of the first string
// Else return false

var permutationSubstring = function(str, sub) {
    var strArr = str.split("");
    var subArr = sub.split("");

    var strObj = {} 

    for (var i = 0; i < strArr; i++) {
        strObj[strArr[i]] = (strObj[strArr[i]] || 0) + 1
    }
    console.log(strObj[1])

};
