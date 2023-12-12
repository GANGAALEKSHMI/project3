function findLargestElement(array) {
    let largest = array[0];
    for (let i = 1; i < array.length; i++) {
      if (array[i] > largest) {
        largest = array[i];
      }
    }
    return largest;
  }
var numbers = [2,6,9,0,5];
var largestNumber = findLargestElement(numbers);
console.log("The largest number is: " + largestNumber); // Output: "The largest number is: 12"
