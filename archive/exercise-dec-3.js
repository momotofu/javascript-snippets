window.sumOfObj = function sumOfObj(inputObject, depth) {
  if (depth === undefined) depth = 0 // keep track of recursive depth
  let sum = 0

  for (let prop in inputObject) { // loop through each property in object
    const value = inputObject[prop] // get value of object property
    if (typeof(value) === 'object' && depth <= 1) { // check if property type is of type 'object'
      sum += sumOfObj(value, depth + 1) // add the sum of level two object properties
    } else {
      sum += value // sum the values of the object
    }
  }

  return sum
}

const testObject = { 'a': 1, 'b': 2, 'c': 3, 'test': { 'b': 10 }}

console.log('Test: sum of test object should be 16.')
console.log('Test passed: ', window.sumOfObj(testObject) === 16)

window.countWordsFrom = function(firstString, secondString) {
  function extractWordsFrom(string) { // get words from a string sentance
    return string.split(' ').filter(function(word) { // filter out any single spaces
      if (word.length !== 0) return word
    })
  }

  return extractWordsFrom(firstString).length + extractWordsFrom(secondString).length // return the sum of words in each list
}

const sampleA = 'Hello world'
const sampleB = ' '
const sampleC = 'goodbye'
const sampleD = 'Hello       world        goodbye'

console.log('Test: number of words from sampleA and sampleB should equal 2.')
console.log('Test passed: ', window.countWordsFrom(sampleA, sampleB) === 2)

console.log('Test: number of words from sampleC and sampleD should equal 4.')
console.log('Test passed: ', window.countWordsFrom(sampleC, sampleD) === 4)

window.noMutateUpper = function(arrayOfStrings) {
  const newArray = [] // create a new array
  for (let i = 0; i < arrayOfStrings.length; i++) { // loop through the initial array
    newArray.push(arrayOfStrings[i].toUpperCase()) // push and transform each value to new array
  }
  return newArray // return unmodified array
}

window.testIfUppercase = function(stringArray) {
  for (string in stringArray) {
    if (string != string.toUpperCase())
      return false
  }
  return true
}

const testArray = ['hello', 'world']

console.log('Test: input array (testArray) should not equal output array.')
console.log('Test passed: ', testArray != window.noMutateUpper(testArray))

console.log('Test: all strings in array should be uppercase.')
console.log('Test passed: ', window.testIfUppercase(window.noMutateUpper(testArray)))

