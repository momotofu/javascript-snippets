var fizzBuzz = function(count) {
  var total = count; 
  while (total > 0) {
    var Fizz = total % 3 == 0 ? 'Fizz' : '';
    var Buzz = total % 5 == 0 ? 'Buzz' : '';
    var FizzBuzz = Fizz + Buzz; 
    if (Fizz === ' ' || Buzz === ' ' || FizzBuzz === ' ') {
      console.log(total)
    } else {
      console.log(Fizz + Buzz + FizzBuzz)
    }
    total -= 1;
  }
}

fizzBuzz(100);