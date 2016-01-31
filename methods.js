/**
Terms:

Notes:
Properties that return functions as values 
are often referred to as methods. 

Methods from an array:
**/
var arrows = [];
arrows.push('fire', 'ice', 'lightning', 'steel');
console.log(arrows.join(' '));
console.log(arrows);
arrows.pop();
console.log(arrows);

// arguments: a counter for the number of arguments
// passed to a function. 
function argumentSurprise() {
  if (arguments) {
    for (var key in arguments) {
      console.log(arguments[key]); 
    }
  } else {
    console.log('I\'m empty');
  }
}

argumentSurprise('hello', 5000000, true, {state: 'alabama'});

function addEntry() {
  var entry = {
    events: [],
    squirrel: false
  }

  for (var key in arguments) {
    if (typeof(arguments[key]) === 'boolean') {
      entry.squirrel = arguments[key];
    } else {
      entry.events.push(arguments[key]);
    }
  }
  return entry; 
}

var firstEntry = addEntry(
  'woke up',
  'brushed teath', 
  'deficated', 
  'ate breakfast', 
  true,
  'showered', 
  'drank tea', 
  'studied'
);

console.log(firstEntry); 
/**


Toys:
How is an array object constructed?
What are the basics? 
Look this up.

**/