module.exports = (() => { 
    function buildTriangle(base) {
        let tipOffset = base % 2 == 0 ? ' ' : '';
        var leftBricks = '';
        var rightBricks = '#'; 
        var counter = Math.abs(base / 2); 

        // fill up leftBricks with empty strings
        for(var i = counter; i > 0; i--) {
          leftBricks += ' '; 
        }

        //place the tip
        console.log(`${leftBricks + tipOffset}#`);

        // build triangle 
        do {
            rightBricks += '#';
            leftBricks = leftBricks.substr(0, counter) + '#' + leftBricks.substr(counter+1);
            counter -= 1; 
            console.log(leftBricks + rightBricks);
        } while (counter > 0); 
    }
        
    function buildObelisk(base, height) {
        let nBase = base >= 3 ? base : 3
        let baseStr = buildnBaseString();
        
        buildTriangle(nBase)
        
        function buildnBaseString() {
            var baseStr = "";
            for(var i = 0; i < nBase * 2; i++)
                baseStr += "#"
            return baseStr
        }

        while (height > 0) {
            console.log(baseStr)
        }
    }

    return {
        buildTriangle: buildTriangle,
        buildObelisk: buildObelisk
    }
})();

/** build oblisiks to compliment the pyramid.
Can I make do while purposefull? **/
