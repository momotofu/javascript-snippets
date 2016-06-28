// In a closure I can freeze and reuse function variables.
// Closures are an apparatus for abstraction. e.x. clearly
// seperating concerns.

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

function getEnv(world, number) {
  return function(statement) {
    console.log(statement + world + number);
  }
}

var statement = getEnv('Mars', '10million');
statement('This is the exotic world of');
statement('There are so many coo stuffs on ');


var thrice = multiplier(3);
var quasar = thrice(6);
console.log(quasar(4));

/** Create a more practicle example.
**/

var warnUser = function (msg) {
    var calledCount = 0;
    return function() {
       calledCount++;
       alert(msg + '\nYou have been warned ' + calledCount + ' times.');
    };
};

// public / private

a = (function () {
    var privatefunction = function () {
        alert('hello');
    }

    return {
        publicfunction : function () {
            privatefunction();
        }
    }
})();

// higher order programming
function proximity_sort(arr, midpoint) {
    arr.sort(function(a, b) { a -= midpoint; b -= midpoint; return a*a - b*b; });
}

// simulated object oriented programing
function counter() {
    var a = 0;
    return {
        inc: function() { ++a; },
        dec: function() { --a; },
        get: function() { return a; },
        reset: function() { a = 0; }
    }
}
