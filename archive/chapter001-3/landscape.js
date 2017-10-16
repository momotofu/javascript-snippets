module.exports.landscape = function() {
  var result = "";
  var flat = function(size) {
    for (var count = 0; count < size; count++)
      result += "_";
  };
  var mountain = function(size) {
    result += "/";
    for (var count = 0; count < size; count++)
      result += "'";
    result += "\\";
  };

  flat(3);
  mountain(4);
  flat(6);
  mountain(1);
  flat(1);
  flat(3);
  mountain(2);
  flat(5);
  console.log(result);
};


module.exports.runAction = function(times, item, action) {
  for (var i = 0; i < times; i++)
    action(item); 
}

module.exports.controlSwitch = function(func1, func2) {
  var alternator = Math.round(Math.random() * 10);
  if (alternator > 5)
    func1
  else 
    func2 
}

module.exports.absLandscape = function(flats, mountains) {
  results = ''; 
  var numFlats = flats; 
  var numMountains = mountains; 

  while (numFlats > 0 || numMountains > 0) {
    controlSwitch(
      runAction(1, '_', function(n) {
        var size = Math.round(Math.random() * 10);
        for (var i = 0; i < size; i++) 
          results += n; 
        numFlats -= 1; 
    }), 
      runAction(1, '`', function(n) {
        var size = Math.round(Math.random() * 10);
        var mountain = '/';
        for (var i = 0; i < size; i++) 
          mountain += n; 
        results += mountain + '\\'; 
        numMountains -= 1; 
    }))
  }

  console.log(results); 
}

module.exports.buildLandscape = function buildLandscape() {
  absLandscape(5, 20);
}


setInterval(buildLandscape, 1000); 


/** simplify and enhence **/
