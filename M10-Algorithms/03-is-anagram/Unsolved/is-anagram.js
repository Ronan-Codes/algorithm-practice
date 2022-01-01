// Write code to create a function that accepts two strings
// Return true if the strings are anagrams of each other, otherwise return false

var isAnagram = function(strA, strB) {
    // check if each letter in strA is included in strB
    // check if false may be easier 
    var result = true;
    var aMap = {};
    var bMap = {};

    for (var i=0; i<strA.length; i++) {
        aMap[strA[i]] = (aMap[strA[i]] || 0) + 1
    }

    for (var i=0; i<strB.length; i++) {
        bMap[strB[i]] = (bMap[strB[i]] || 0) + 1
    }

    // console.log(aMap, bMap)

    for (const key in aMap) {
        if (aMap[key] !== bMap[key]) {
            result = false
        }
    }
    
    return result
};
