// Write code to create a function that accepts an array of numbers, finds the largest two numbers, and returns the product of the two

var productOfLargestTwo = function (arr) {
  var largest = null;
  var secondLargest = null;

  for (var i = 0; i < arr.length; i++) {
    var currentNumber = arr[i];

    if (currentNumber > largest || largest === null) {
      secondLargest = largest;
      largest = currentNumber;
    } else if (currentNumber > secondLargest || secondLargest === null) {
      secondLargest = currentNumber;
    }
  }

  return largest * secondLargest;
};


// second version
// var productOfLargestTwo = function (arr) {
//   var largest = Math.max.apply(null, arr);

//   var copyArr = arr
//   var max = Math.max.apply(null, copyArr); // get the max of the array
//   arr.splice(arr.indexOf(max), 1); // remove max from the array
//   var secondLargest = Math.max.apply(null, copyArr); // get the 2nd max

//   return largest * secondLargest
// }
