// Write code to return the the number of vowels in `str`

var vowelCount = function(str) {
    var total = 0;

    for (var i = 0; i < str.length; i++) {
        if (str[i] === "a" || 
        str[i] === "e" ||
        str[i] === "i" ||
        str[i] === "o" ||
        str[i] === "u" ||
        str[i] === "A" ||
        str[i] === "E" ||
        str[i] === "I" ||
        str[i] === "O" ||
        str[i] === "U") {
            total += 1
        }
    }

    return total;
};
