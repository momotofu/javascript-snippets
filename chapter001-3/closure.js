function multiplier(factor) {
  return function(number) {
    return number * factor; 
  }
}

var thrice = multiplier(3);
console.log(thrice(4)); 

/** take this to 
three levels.
**/
