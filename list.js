
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

function nth(list, n) {
  if (!list)
    return undefined;
  else if (n == 0)
    return list.value;
  else
    return nth(list.rest, n - 1);
}

console.log(nth(2, list)); 


/** Branden's contribution **/ 
var arr = [1,2,3,4,5];

var l = createList(arr);

function listToArray(list) {
  var arr = [];
  var el = list;
  while (el) { 
    if(el) {
      arr.push(el.value);
      el = el.rest;
    } else {
      el = false;
    }
 }
  return arr; 
}

var res = listToArray(l);