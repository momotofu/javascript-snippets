function multiplier(factor) {
  console.log('factor: ' + factor); 
  return function(number) {
    console.log('number: ' + number); 
    return function(anotherNumber) {
      console.log('anotherNumber: ' + anotherNumber); 
      return anotherNumber * number * factor; 
    }
  }
}

var thrice = multiplier(3);
var quasar = thrice(6); 
console.log(quas(4)); 

/** take this to 
three levels.
**/
