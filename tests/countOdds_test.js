const test=require('assert');
const countOdds=require('../functionsOfArray').countOdds;

test.deepEqual(countOdds([1,3,5,6,3,2]),4);
test.deepEqual(countOdds([1,4,3,2]),2);
test.deepEqual(countOdds([2]),0);
