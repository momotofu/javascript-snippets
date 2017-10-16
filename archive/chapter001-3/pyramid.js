module.exports = (() => { 
    var buildTriangle = function(base) {
        var leftBricks = '';
        var rightBricks = '#'; 
        var counter = Math.abs(base / 2); 

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
        
    return {
        buildTriangle: buildTriangle
    }
})();

/** build oblisiks to compliment the pyramid.
Can I make do while purposefull? **/
