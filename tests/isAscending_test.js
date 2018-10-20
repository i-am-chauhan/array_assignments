const assert=require('assert');
const isAscending=require('../functionsOfArray.js').isAscending;

assert.deepEqual(isAscending([2,3,4,5]),true);
console.log("1st assert passed");
assert.deepEqual(isAscending([2,3,4,0]),false);
console.log("2nd assert passed");
assert.deepEqual(isAscending([2,4,34,56]),true);
console.log("3rd assert passed");
