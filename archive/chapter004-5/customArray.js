
exports.array = {
  items: {},
  length: 0,

  push: function(n) {
    this.items[this.length] = n; 
    this.length += 1;
  },

  pop: function(p) {
    current = this.items[this.length];
    delete this.items[this.length]; 
    this.length -= 1;
    return current;
  },

  indexOf: function(n) {
    for (var index in this.items) {
      if (this.items[index] === n) {
        return index;
      }
    }
  }
} 
