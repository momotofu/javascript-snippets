function beanCount(char, string) {
  var beans = '';
  for (var i = 0; i < string.length; i++) {
    if (string.charAt(i) === char) 
      beans += char;
  }
  return beans.length; 
}

console.log(beanCount('z', 'zazluciouszzzigut'));