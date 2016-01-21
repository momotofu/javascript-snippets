function chicken() {
  return egg();
}

function egg() {
  return chicken();
}

console.log('Which came first? ' + chicken()); 