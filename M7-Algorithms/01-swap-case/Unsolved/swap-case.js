// Write code to create a function takes a string and returns the string with all of the letter cases swapped

var swapCase = function(str) {
    // turn string into array of letters 
    var newArr = str.split("")
    // console.log(newArr)

    // for loop to change each character to opposite letter case 
    for (var i = 0; i < newArr.length; i ++) {
        var compare = newArr[i]
        var small = compare.toLowerCase()
        var big = compare.toUpperCase()

        if (newArr[i] === big) {
            newArr[i] = newArr[i].toLowerCase()
            // console.log(newArr[i])
        }
        else if (newArr[i] === small) {
            // console.log("upperCase")
            newArr[i] = newArr[i].toUpperCase()
            // console.log(newArr[i])
        }
    }

    console.log(newArr)
    return newArr.join("")
};

// commands & notes
    // to change a portion of an array, set it to equal(=) to something
    // .split() - splits strings into array 
    // .join - join array into a string 