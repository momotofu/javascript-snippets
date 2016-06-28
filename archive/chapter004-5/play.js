function action(goal, achieved) {
  var achieved = achieved;
  console.log('formulate plan');
  console.log('choose plan');
  console.log('execute');
  console.log('percieve change');
  console.log('interperate');
  console.log('compare');
  console.log('achieved ' + goal); 
  if (!achieved)
    action('\n A ' + goal + ' from the past', true);
}

action('sleep');

var moodJournal = [];



moodJournal.addEntry = addEntry function(mood, date) {
  moodJournal.push({
    mood: mood,
    date: date
  });
}
moodJournal.addEntry('calm', 'Jan. 28, 2016');
