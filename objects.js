/**
Terms:
arbitrary collection of properties. 

Notes:

**/
  var day1 = {
    wereSquirrel: false,
    events: ['touched a tree', 'ate wet jerky', 'took a short nap', 'flew a kite', 'programmed a new app']
  }

  console.log(day1.wereSquirrel);
  delete day1.wereSquirrel;
  console.log(day1.wereSquirrel);
  
  day1.moods = ['calm', 'anxious', 'torpid', 'crafty'];
  
  console.log(day1.moods);

  if ("moods" in day1)
    console.log('booya');

/**
Toys:

**/