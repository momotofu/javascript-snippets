var library = ['History', 'Science', 'Mathmatics', 'Geography', 'Language Arts', 'Art', 'Design', 'Psychology'];

var reverseArray = function(array) {
  var newArray = [];

  for (var i = array.length - 1; i > -1; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}

var reverseArrayInPlace = function(array) {
  var proxy = [];
  for (var i = 0; i < array.length / 2; i++) {
    proxy.push(array[i]);
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = proxy.pop();
  }
  return array
}

console.log(reverseArrayInPlace(library));
