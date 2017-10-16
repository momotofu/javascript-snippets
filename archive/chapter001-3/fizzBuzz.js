module.exports = (() => {
    return {
        fizzBuzz: function(count) {
            var total = count; 
            while (total > 0) {
                var output = '';
                if (total % 3 == 0)
                  output += 'Fizz';
                if (total % 5 == 0)
                  output += 'Buzz';
                if (!output) 
                  output = 'spsss..';
                console.log(output);
                total -= 1;
            }
        }
    }
})();

/** write out all the different
ways this can be accomplished.
Can this be simplified further?**/
