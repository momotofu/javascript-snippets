function beanCount(char, string) {
  var beans = '';
  for (var i = 0; i < string.length; i++) {
    if (string.charAt(i) === char) 
      beans += char;
  }
  return beans.length; 
}

console.log(beanCount('z', 'zazluciouszzzigut'));


function beenSpatter(char, string) {
  var beans = '';

  for (var iteration = 0; iteration < string.length; iteration++) {
    beans += string[iteration]; 
    
    var count = Math.random();
    while (count > 0) {
      beans += char; 
    }
  }

}
/** beanSpill
Write a function that takes a character
and a string and returns a new string with
the character glued in randomly 
**/ 