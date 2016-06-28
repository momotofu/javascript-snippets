function createRange(start, stop, step) {
  var range = [];
  var started = true;
  var current = start; 
  for (var i = start; i <= stop; i++) {
    if (!started) {
    range[i - 1] = !step ? i : current += step; 
    if (current >= 10)
      return range;
    } else {
      range[i - 1] = start; 
      started = false; 
    }
  }

  return range;
}

function createCleanRange(start, stop, step) {
  if (step === null) step = 1;
  var range = [];
  if (step > 0) {
    for (var i = start; i <= stop; i += step)
      range.push(i);
  } else {
    for (var i = start; i >= stop; i += step)
      range.push(i);
  }
  return range;
}

function sumRange(array) {
  var total = 0;

  for (var key in array) {
    if (typeof(array[key]) === 'number') {
      total += array[key];
    }
  }

  return total; 
}

var my55 = sumRange(createRange(1,10)); 
var range3x = createRange(1,10,3);
var range4x = createCleanRange(10,1,-1);
console.log(range4x);