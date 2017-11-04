
exports.array = {
  items: {},
  length: 0,

  push: function(n) {
    items[length] = n; 
    length += 1;
  },

  pop: function(p) {
    delete items[length]; 
    length -= 1; 
  },

  indexOf: function(n) {
    for (var index in items) {
      if (items[index] === n) {
        return index;
      }
    }
  }
} 
