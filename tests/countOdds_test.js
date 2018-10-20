const test=require('assert');
const countOdds=require('../functionsOfArray').countOdds;

test.deepEqual(countOdds([1,3,5,6,3,2]),4);
console.log('1st test passed');
test.deepEqual(countOdds([1,4,3,2]),2);
console.log('2nd test passed');
test.deepEqual(countOdds([2]),0);
console.log('3rd test passed');
