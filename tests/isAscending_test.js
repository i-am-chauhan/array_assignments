const test=require('assert');
const isAscending=require('../functionsOfArray.js').isAscending;

test.deepEqual(isAscending([2,3,4,5]),true);
console.log("1st test passed");
test.deepEqual(isAscending([2,3,4,0]),false);
console.log("2st test passed");
test.deepEqual(isAscending([2,4,34,56]),true);
console.log("3st test passed");
