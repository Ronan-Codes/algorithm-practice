// Write code to create a function that accepts two strings
// Return true if the strings are anagrams of each other, otherwise return false

var isAnagram = function(strA, strB) {
    // check if each letter in strA is included in strB
    // check if false may be easier 

    var aMap = {};
    var bMap = {};

    for (var i=0; i<strA.length; i++) {
        aMap[strA[i]] = true;
    }

    for (var i=0; i<strB.length; i++) {
        aMap[strB[i]] = true;
    }

    
};
