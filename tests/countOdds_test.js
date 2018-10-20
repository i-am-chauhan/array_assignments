const assert=require('assert');
const countOdds=require('../functionsOfArray').countOdds;

assert.deepEqual(countOdds([1,3,5,6,3,2]),4);
console.log('1st assert passed');
assert.deepEqual(countOdds([1,4,3,2]),2);
console.log('2nd assert passed');
assert.deepEqual(countOdds([2]),0);
console.log('3rd assert passed');
