
function createList(array) {
  var list = null; 
  for (var i = array.length -1; i >= 0; i--) 
    list = {value: array[i], rest: list};
  return list;
}

function listToArray(list) {
  var array = [];
  var rest = true;
  while (rest != null) { 
    console.log(rest);
    array.push(list.value);
    rest = list.rest;
  }
  return array; 
}

var hobbies = ['Dungeons and Dragons', 'Meditation', 'Rocket Science'];
var list = createList(hobbies);


function listToArray(list) {
  var array = [];
  for (var node = list; node; node = node.rest)
    array.push(node.value);
  return array;
}

function prepend(value, list) {
  return {value: value, rest: list}
}

function nth(n, list) {
  for (var node = list; node.value != n; node = node.rest)
    var node = list;
    while (node.value != n) {
      node = node.rest; 
    } 
    return node.value;
}

console.log(nth(2, list)); 
