// Write code to create a function that accepts an array of numbers
// Each number represents the duration of a song in minutes
// Return the maximum number of songs from the array that can fit in a 60 minute playlist

var mostSongsInPlaylist = function(arr) {
  var arrInOrder = arr.sort();
  var minutes = 0
  var limit = 60
  var numberOfSongs = 0

  // if (arr.length === 0) {
  //   return 0
  // }

  for (var i=0; i<arrInOrder.length; i++) {
    var currentNum = arrInOrder[i];

    if (currentNum + minutes < limit) {
      minutes += currentNum
      numberOfSongs += 1
    }
    else if (currentNum + minutes === limit) {
      minutes += currentNum
      numberOfSongs += 1
      // return numberOfSongs
    }
    else {
      return numberOfSongs
    }
  }

  console.log(numberOfSongs)
  return numberOfSongs
};