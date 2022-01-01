// Write code to create a function that accepts a string (`str`) and reverses the order of the words in the string

var reverseWords = function(str) {
    var arr = str.split(" ")
    var result = []

    for (var i=arr.length -1; i >= 0; i--) {
        result.push(arr[i])
    }

    var newStr = result.join(" ")
    return newStr
};
