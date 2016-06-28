function chicken() {
  return egg();
}

function egg() {
  return chicken();
}

console.log('Which came first? ' + chicken()); 

/** are cyclical realationships useful? 
could this work like a motor? 
Look up what this is called in swift.
**/ 