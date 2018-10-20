const assert=require('assert');
const {isSubset}=require('../functionsOfArray');

assert.deepEqual(isSubset([1,2,3,4,5],[1,2],),true);
console.log('1st test passed');
assert.deepEqual(isSubset([1,2,3],[1,2,3]),true);
console.log('2nd test passed');
assert.deepEqual(isSubset([1,2,3],[]),true);
console.log('3rd test passed');
