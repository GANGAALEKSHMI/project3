function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
 }
  
var min = 1;
var max = 25;
var randomNum = generateRandomNumber(min, max);
console.log("Random number between " + min + " and " + max + ": " + randomNum);
