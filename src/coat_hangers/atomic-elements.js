// runs in javascript browser

// -- A --
// logical, conditional / ternary, comparrison operators
// unary, binary, ternary operators
// variables that capture values
// environment functions using arguments
//
// -- B --
// control flow using conditional execution in contrast to the usual top to bottom
// unary negate logical (first converts to a boolean) operator returning the inverse value
// recursion
//
// -- C --
// invoking a function

var getUserNumber = function(message) {
  // -- A --
  var userNumber = typeof message === 'string' && message.length > 0 ? prompt(message) : prompt('Enter in your favorite number');
  // -- B --
  if (!isNaN(userNumber)) {
    alert('your number is the square root of ' + userNumber * userNumber);
  } else {
    getUserNumber('Please enter a number');
  };
};

// -- C --
getUserNumber();