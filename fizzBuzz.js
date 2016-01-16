var fizzBuzz = function(count) {
  var total = count; 
  while (total > 0) {
    var Fizz = total % 3 == 0 ? 'Fizz' : '';
    var Buzz = total % 5 == 0 ? 'Buzz' : '';
    var fester = !Fizz && !Buzz ? 'spsss..' : '';
    var FizzBuzz = Fizz + Buzz; 
    console.log(Fizz + Buzz + fester);
    total -= 1;
  }
}

fizzBuzz(100);