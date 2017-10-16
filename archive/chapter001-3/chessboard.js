module.exports.generateSquareBoard = function(size) {
  board = '';
  for (var x = size; x > 0; x--) {
    for (var y = size; y > 0; y--) {
      if ((x + y) % 2 == 0) {
        board += ' ';
      } else {
        board += '#';
      }
    }
    board += '\n';
  }
  console.log(board);
}

// generateSquareboard(20); 

/**
write a function that generates a diamond.
Write a function the generates a cube. 
Write a function that generates a tesseract. 
**/ 
