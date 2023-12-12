function checkSign(number) {
    if (number > 0) {
      return "positive";
    } else if (number < 0) {
      return "negative";
    } else {
      return "zero";
    }
  }
console.log(checkSign(4));    
console.log(checkSign(0));   
console.log(checkSign(-8));  
