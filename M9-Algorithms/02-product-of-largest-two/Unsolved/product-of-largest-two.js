// Write code to create a function that accepts an array of numbers, finds the largest two numbers, and returns the product of the two

// var productOfLargestTwo = function(arr) {
//     // * Find the largest and the second largest numbers in the given array.
//     // * Return the product of the largest and the second largest number.

//     var twoLargest = [0, 0]

//     var findProduct = (arr) => {
//         var product = arr[0]*arr[1];
//         return product
//     }

//     for (var i=0; i< arr.length; i++) {
//         if (arr[i] > twoLargest[0]) {
//             twoLargest[0] = arr[i]
//         }
        
//         if (arr[i] > twoLargest[1]) {
//             twoLargest[1] = arr[i]
//         }
//     }

//     findProduct(twoLargest)
// };

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
