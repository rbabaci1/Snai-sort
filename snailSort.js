// Hello world!

// The original Array
var array = [
              [1,   2,  3,  4,  5,  6],
              [20, 21, 22, 23, 24,  7],
              [19, 32, 33, 34, 25,  8],
              [18, 31, 36, 35, 26,  9],
              [17, 30, 29, 28, 27, 10],
              [16, 15, 14, 13, 12, 11]
            ];

// The wanted Array after the snail sort
var result = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35];

// Checks if the array empty or not
function lengthCheck(arr) {
	return arr.flat().length > 0;
}

// it removes items from the sub-array at index 0 from right to lerft and returns them
function rightSplice(arr) {
  if (lengthCheck(array)) {
  	return arr[0].splice(0);
  }
}

// it removes items at the end of each sub-array from top to bottom and returns them
function downSplice(arr) {
  // Remove the empty sub array cause when using splice it deletes the items but it leaves an empty sub-array that's not needed
  arr.shift();

  if (lengthCheck(array)) {
      var newArr = [];
      for (var i = 0; i < arr.length; i++) {
        var length = arr[i].length;
        newArr.push(arr[i].splice(length - 1, 1));
      }
      return newArr.flat();
  }
}

// it  removes items from the last sub-array from right to left and returns them
function leftSplice(arr) {
  if (lengthCheck(array)) {
  	return arr[arr.length - 1].splice(0).reverse();
  }
}

// it removes items from each sub-array from bottom to top and returns them
function upSplice(arr) {
  // Remove the empty sub array cause when using splice it deletes the items but it leaves an empty sub-array that's not needed
  arr.pop();

  if (lengthCheck(array)) {
      var newArr = [];
      for (var i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i].splice(0, 1));
      }
      return newArr.flat();
  }
}

// The main function that only calls the other functions if the main array still have items in it
function snail(array) {
  var resultArr = [];

  while (array.flat().length > 0) {
      resultArr.push(rightSplice(array));
	  if (array.flat().length > 0) {
      	resultArr.push(downSplice(array));
      }
	  if (array.flat().length > 0) {
      	resultArr.push(leftSplice(array));
      }
	  if (array.flat().length > 0) {
     	 resultArr.push(upSplice(array));
      }
  }
}

//Calling the main function
snail(array);

// Runnig a test to check if the to two arrays have similar values
console.log(resultArr.flat().join('') === result.join(''));

