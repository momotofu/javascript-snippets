/* Execution contexts are how the interpreter
 * stores scope while running the code. A new
 * execution context is created even on multiple
 * calls of the same function.
 */
// Global scope
var hero = "Gal"
var newSaga = function() {
  // function scope 1
  var foil = "Cat"
  var saga = function () {
    // function scope 2
    var deed = "Pet"
    log(hero+deed+foil)
  }
}
