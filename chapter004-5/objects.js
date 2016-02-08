*
Terms:
arbitrary collection of properties. 

Notes:

**/
var day1 = {
  wereSquirrel: false,
  events: ['touched a tree', 'ate wet jerky', 'took a short nap', 'flew a kite', 'programmed a new app']
}

console.log(day1.wereSquirrel);
delete day1.wereSquirrel;
console.log(day1.wereSquirrel);

day1.moods = ['calm', 'anxious', 'torpid', 'crafty'];

console.log(day1.moods);

day1.moods.shift()
console.log(day1.moods);
day1.moods.unshift('cathartic');
console.log(day1.moods);
console.log(day1.moods.lastIndexOf('anxious'));


function removeAtIndex(array, index) {
  return array.slice(0, index).concat(array.slice(index + 1));
}

console.log(removeAtIndex(day1.moods, 1)); 

var myString = 'stringeeeeeez';
console.log(myString.indexOf('eez'));

myString = ('hello \n') + myString;
console.log(myString);
myString.trim(); 
console.log(myString);

// In browsers, the global scope object is stored in the window variable.
var myVar = 10;
console.log("myVar" in window);
// ▹ true
console.log(window.myVar);
// ▹ 10”

/**
Toys:

*