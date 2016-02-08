/**
Terms:

Notes: Fnctions that operate on other functions, 
either by taking them as arguments or by returning them, 
are called higher-order functions.

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

function transparentWrapping(f) {
  return function() {
    return f.apply(null, arguments);
  };

/**

Toys:

**/