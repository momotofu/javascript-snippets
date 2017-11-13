// write a function that returns 
// true only if the two values are 
// exactly equal. 


var orange = {
  category: 'fruit',
  description: 'citrus',
  color: 'orange',
  origin: 'California',
  shape: 'circle'
}

module.exports = function grabKeys(object) {
  var bucket = [];

  for (prop in object) {
    console.log(prop)
    bucket.push(object[prop]);
  }

  return bucket;
}


console.log(grabKeys(orange));

function deepEqual(a, b) {
  if (a === b) return true;
  
  if (a == null || typeof a != "object" ||
      b == null || typeof b != "object")
    return false;
  
  var propsInA = 0, propsInB = 0;

  for (var prop in a)
    propsInA += 1;

  for (var prop in b) {
    propsInB += 1;
    if (!(prop in a) || !deepEqual(a[prop], b[prop]))
      return false;
  }

  return propsInA == propsInB;
}


function DE(case1, case2) {
  if (case1 === case2)
    return true; 
  
  if (typeof case1 != 'object' || case1 == null ||
      typeof case2 != 'object' || case2 == null) 
    return false;

  var case1Props = 0, case2Props = 0; 

  for (var prop in case1) 
    case1Props += 1; 

  for (var prop in case2) {
    case2Props += 1; 
    if (!(prop in case1) || !DE(case1[prop], case2[prop]))
      return false;
  }

  console.log('case1Props: ' + case1Props + ' case2Props: ' + case2Props); 
  return case1Props == case2Props; 
}

console.log(DE({hello: 1}, {hello: 1})); 
