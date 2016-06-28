var buildTriangle = function(base) {
    var leftBricks = '';
    var rightBricks = ''; 
    var counter = base / 2; 

    // fill up leftBricks with empty strings
  for(var i = counter; i > 0; i--) {
      leftBricks += ' '; 
    }
    
    //place the tip
    console.log(leftBricks + '#');
  
  // build triangle 
    do {
        rightBricks += '#';
        leftBricks = leftBricks.substr(0, counter) + '#' + leftBricks.substr(counter+1);
        counter -= 1; 
        console.log(leftBricks + rightBricks);
    } while (counter > 0); 
}

var numberOfPyramids = 10;
var base = 3;

do {
    buildTriangle(base);
    base *= 2;
    numberOfPyramids -= 1; 
} while (numberOfPyramids > 0);

/** build oblisiks to compliment the pyramid.
Can I make do while purposefull? **/ 


