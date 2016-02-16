/**
Terms:

Notes: Fnctions that operate on other functions, 
either by taking them as arguments or by returning them, 
are called higher-order functions.

“Abstractions add layers between the raw things the computer
is doing and the concepts we are working with and thus cause
 the machine to perform more work.”

Excerpt From: Marjin, Haverbeke. “Eloquent Javascript, 2nd Ed.” iBooks. https://itun.es/us/-neB5.l

**/

function noisy(f) {
  return function(arg) {
    console.log("calling with", arg);
    var val = f(arg);
    console.log("called with", arg, "- got", val);
    return val;
  };
}

console.log(Boolean(0)); 

function repeat(times, body) {
  for (var i = 0; i < times; i++) body(i);
}

repeat(3, function(n) {
  unless(n % 2, function() {
    console.log(n, "is even");
  });
});

function unless(test, then) {
  if (!test) then();
}

function transparentWrapping(f) {
  return function() {
    return f.apply(null, arguments);
  };
}

function map(array, transform) {
  var newArray = []; 
  array.forEach(function(n) {
    newArray.push(transform(n))
  });
  return newArray;
}

function reduce(array, combine, start) {
  var current = start;
  for (var i = 0; i < array.length; i++)
    current = combine(current, array[i]);
  return current;
}

console.log(absReduce([1, 2, 3, 4], function(a, b) {
  return a + b;
}, 0));

function absReduce(array, combine, start) {
  var current = start; 
  array.forEach(function(n) {
    current = combine(n, current); 
  }); 
  return current; 
}

// is this really all that clear?  
function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}
function age(p) { return p.died - p.born; }
function male(p) { return p.sex == "m"; }
function female(p) { return p.sex == "f"; }

console.log(average(ancestry.filter(male).map(age)));
// ▹ 61.67
console.log(average(ancestry.filter(female).map(age)));
// ▹ 54.56”



/**

Toys:

**/