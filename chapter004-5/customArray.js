var array = {
  items: {},
  length: 0,


  push: function(p) {
    items[length] = p; 
    length += 1;
  },
  pop: function(p) {
    delete items[length]; 
    length -= 1; 
  },
  indexOf: function(p) {
    for (var index in items) {
      if (items[index] === p) {
        return index;
      }
    }
  }

} 


var toDoList = array;
array.push('exercise');
array.push('read');
console.log(array.items);


