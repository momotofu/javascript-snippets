/**
Terms: 

Notes: abstraction helps optimize conceputal model adaptation 
and reduces myopic errors. 

Toys:

**/

// error prone and lenthy
var array = [1,2,3];
for (var i = 0; i < array.length; i++) { 
  var currentItem = array[i];
  console.log(currentItem); 
}

// abstracted and descriptive 
function logArrayItems(array) {
  for (var each in array) 
    console.log(array[each]); 
}

function forEach(array, action) {
  for (var each in array) 
    action(array[each]); 
}

forEach(array, function(n) { 
  console.log(n * 2); 
});


var journal = {
  entries: [['ate food', 'read', 'drew stuff', 'watched 2001: Space Odyssey', 'pet cat', true],
                         ['went to gym', 'showered', 'worked', 'studied Japanese']]
}

array.forEach(function(el) {
  console.log((el *= el) / 2);
})

journal.entries.forEach(function(n) {
  console.log(n.forEach(function(n) {
    console.log(n);
  }));
});

var paddedJournal = map(journal.entries[0], function(n) {
  if (typeof n == 'string')
    return '00' + n + '00'; 
  else 
    return n  
});

console.log(paddedJournal); 



function map(array, transform) {
  var newArray = []; 
  array.forEach(function(n) {
    newArray.push(transform(n))
  });
  return newArray;
}

/**

**/