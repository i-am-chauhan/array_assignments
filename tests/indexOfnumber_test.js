const test=require('assert');
const indexOfValue=require('../functionsOfArray.js').indexOfValue;

test.deepEqual(indexOfValue([2,4,6,8],4),1);
test.deepEqual(indexOfValue([2,4,6,8],2),0);
test.deepEqual(indexOfValue([2,4,6,8],6),2);
test.deepEqual(indexOfValue([2,4,6,8],7),'');
