// Write code that returns true if `str` is a palindrome, and false if `str` is not a palindrome

var isPalindrome = function(str) {
    var first = str
    var second = ""
    var strLength = str.length -1

    for (var i = strLength; i >= 0; i--) {
        second = second.concat(str[i])
    }

    if (first === second) {
        return true
    }
    else {
        return false
    }
};
