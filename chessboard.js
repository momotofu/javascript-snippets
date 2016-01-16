var generateBoard = function(width, height) {
  var board = '';
  var rowCount = height; 
  var colCount = width;
  var hash = true;
  var addPiece = function() {
    board += !!hash ? '#' : ' ';
    hash = !!hash ? false : true; 
  }
  do {
    for (var i = colCount; i > 0; i--) {
      addPiece();
      if (i === 1) {
        board += '\n';
      }
    }
    rowCount -= 1; 
  } while (rowCount > 1);
  console.log(board);
}

generateBoard(311, 150);