function speak(line) {
  console.log('The ' + this.type + ' rabbit says, \"' + line + '\"');
}

var redRabbit = {
  type: 'red'
};

var tibbarDer = {
  type: 'der'
}

const peter = {
  type: 'rabbit'
}

//polymorphism
var rabbits = [redRabbit, tibbarDer];

module.exports.talkToRabbits = () => {
  rabbits.forEach(function(n) {
    speak.call(n, 'I\'m a ' + n.type + ' kind of rabbit.');
  })
}


speak.apply(redRabbit, ['I\'m as good as backwards dear sir.', 'There\'s a snake in my boot']);

var mechanicalRabbit = {
  type: 'mechanical',
  speak: function(line) {
    console.log('The ' + this.type + ' rabbit says, \'' + line);
  },
  fuelType: 'oil'
};

mechanicalRabbit.speak('hello');
var mechaRabbit = Object.create(mechanicalRabbit);
console.log(mechaRabbit.speak('Sqreeeech'));
