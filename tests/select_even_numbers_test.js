const assert=require('assert');
const listOfEvenNumbers=require('../functionsOfArray.js').listOfEvenNumbers;

assert.deepEqual(listOfEvenNumbers([12,13,14]),[12,14]);
assert.deepEqual(listOfEvenNumbers([12,13,,2,15,14]),[12,2,14]);
