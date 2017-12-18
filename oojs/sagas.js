/* Execution contexts are how the interpreter
 * stores scope while running the code. A new
 * execution context is created even on multiple
 * calls of the same function.
 */
// Global scope
var sagas = []
var hero = "Gal"
var newSaga = function() {
  // function scope 1
  var foil = "Cat"
  var sagas.push(function () {
    // function scope 2
    var deed = "Pet"
    log(hero+deed+foil)
  })
}
newSaga()
sagas[0]()
sagas[0]()
newSaga()
sagas[0]() // uses same execution context when created
sagas[1]() // uses different execution conetext from sagas[0]
