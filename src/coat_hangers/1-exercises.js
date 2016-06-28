// solutions

// building a triangle
// for (var line = "#"; line.length < 8; line += "#")
//   console.log(line);

// chessboard

var size = 8;
var board = "";

for (var y = 0; y < size; y++) {
  for (var x = 0; x < size; x++) {
    if ((x + y) % 2 == 0)
      board += " ";
    else
      board += "#";
  }
  board += "\n";
}


// drawTriangle(10);
// fizzBuzz(100);
//drawChessboard(8);

function drawChessboard(dimension) {
  var tiles = {black: '#', white: ' '};
  var board = '';

  function constructBoard(length) {
    for (var i = length; i > 0; i--)
        board += rowBuilder(tiles, i % 2, length, '');

    function rowBuilder(tiles, state, length, row) {
      if (length < 1)
        return row + '\n';
      else
        return rowBuilder(tiles, !state, length - 1, (state ? row + tiles.black : row + tiles.white));
    }
  }

  constructBoard(dimension);
  console.log(board);
}


function drawTriangle(base) {
  var triangleBase = base;
  var triangle = '';

  function constructRow(count) {
    var block = '#';
    var row = '';
    for (var blockCount = 0; blockCount < count; blockCount++) {
      row += block;
    }
    return row + '\n';
  }

  do {
    triangle = constructRow(triangleBase) + triangle;
    triangleBase -= 1;
  } while (triangleBase > 0);

  console.log(triangle);
}


function fizzBuzz(count) {
  for (var n = 100; n > 0; n++) {
    var output = '';
    if (n % 3 == 0)
      output += 'fizz';
    if (n % 5 == 0)
      output += 'Buzz';
    console.log(output || n);
  }
}

console.log('test');
// helper functions
var constructHashRow = (width, isCheckered, isOdd) => {

  var black = '#';
  var white = ' ';

  var buildRow = (block, currentWidth, isCheckered) => {
    if (currentWidth === width)
      return;
    if (!isCheckered)
      return block + buildRow(block, currentWidth - 1);
    if (block === ' ')
      return block + buildRow(black, currentWidth - 1);
    else
      return block + buildRow(white, currentWidth - 1);
  };

  if (isCheckered)
    return isOdd ? buildRow(black, width, isCheckered) : buildRow(white, width, isCheckered);
  else
    return buildRow(black, width);
};

constructHashRow(5);