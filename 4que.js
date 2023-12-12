function reverseString(string) {
    let reversedString = '';
    for (let i = string.length - 1; i >= 0; i--) {
      reversedString += string[i];
    }
    return reversedString;
  }
var originalString = "Helloo!";
var reversed = reverseString(originalString);
console.log("Reversed string: " + reversed); // 

  