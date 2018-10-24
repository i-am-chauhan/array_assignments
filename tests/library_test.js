const assert=require('assert');
const average=require('../functionsOfarray').average;
const countEvens=require('../functionsOfArray').countEvens;
const countOdds=require('../functionsOfArray').countOdds;
const lib=require('../functionsOfArray');
const {difference}=require('../functionsOfArray');
const {extractDigits}=require('../functionsOfArray');
const greatestNumber=require('../functionsOfArray.js').greatestNumber;
const indexOfValue=require('../functionsOfArray.js').indexOfValue;
const {intersection}=require('../functionsOfArray');
const isAscending=require('../functionsOfArray.js').isAscending;
const isDescending=require('../functionsOfArray.js').isDescending;
const {isSubset}=require('../functionsOfArray');
const mapLength=require('../functionsOfArray').mapLength;
const {partition}=require('../functionsOfArray');
const result=require('../functionsOfArray.js').reverseFibonacci;
const reverse=require('../functionsOfArray.js').reverse;
const {rotate}=require('../functionsOfArray');
const evenIndexNumbers=require('../functionsOfArray.js').selectEvenIndexValues;
const listOfEvenNumbers=require('../functionsOfArray.js').listOfEvenNumbers;
const selectOddNumbers=require('../functionsOfArray.js').selectOddNumbers;
const smallestNumber=require('../functionsOfArray').getSmallestNumber;
const sumOfElements=require('../functionsOfArray.js').sumOfElements;
const {union}=require('../functionsOfArray');
const {unique}=require('../functionsOfArray')
const {zip}=require('../functionsOfArray');

assert.deepEqual(average([45]),45);
console.log('1st test passed');
assert.deepEqual(average([45,35]),40);
console.log('2nd test passed');
assert.deepEqual(average([10,20,30]),20);
console.log('3rd test passed');

assert.deepEqual(countEvens([12,13]),1);
console.log('1st test passed');
assert.deepEqual(countEvens([12,13,2,4]),3);
console.log('2nd test passed');
assert.deepEqual(countEvens([12,11,10,13]),2);
console.log('3rd test passed');

assert.deepEqual(lib.countNumbersAbove([2,45,56],4),2);
console.log('1st test passed');
assert.deepEqual(lib.countNumbersAbove([2],4),0);
console.log('2nd test passed');
assert.deepEqual(lib.countNumbersAbove([2,45,6,4,56],4),3);
console.log('3rd test passed');

assert.deepEqual(lib.countNumbersBelow([1,2,3,4],4),3);
console.log('1st test passed');
assert.deepEqual(lib.countNumbersBelow([4,4,4],4),0);
console.log('2nd test passed');
assert.deepEqual(lib.countNumbersBelow([0,100],4),1);
console.log('3rd test passed');

assert.deepEqual(countOdds([1,3,5,6,3,2]),4);
console.log('1st assert passed');
assert.deepEqual(countOdds([1,4,3,2]),2);
console.log('2nd assert passed');
assert.deepEqual(countOdds([2]),0);
console.log('3rd assert passed');

assert.deepEqual(difference([12,12,1,2],[1,12]),[2]);
console.log('1st test passed');
assert.deepEqual(difference([3,4,2,6],[6,3,78,6]),[2,4]);
console.log('2nd test passed');
assert.deepEqual(difference([0],[0]),[]);
console.log('3rd test passed');

assert.deepEqual(extractDigits(1234),[1,2,3,4]);
console.log('1st test passed');
assert.deepEqual(extractDigits(0),[0]);
console.log('2nd test passed');
assert.deepEqual(extractDigits(12),[1,2]);
console.log('3rd test passed');

assert.deepEqual(greatestNumber([12,3,4,5,45]),45);
console.log('1st test passed');
assert.deepEqual(greatestNumber([12,234,45,56]),234);
console.log('2nd test passed');
assert.deepEqual(greatestNumber([23,45,46,76]),76);
console.log('3rd test passed');
assert.deepEqual(greatestNumber([43,45,53,88]),88);
console.log('4th test passed');

assert.deepEqual(indexOfValue([2,4,6,8],4),1);
console.log('1st test passed');
assert.deepEqual(indexOfValue([2,4,6,8],2),0);
console.log('2nd test passed');
assert.deepEqual(indexOfValue([2,4,6,8],6),2);
console.log('3rd test passed');
assert.deepEqual(indexOfValue([2,4,6,8],7),-1);
console.log('4th test passed');
assert.deepEqual(indexOfValue([2,4,6,8,6],6),2);
console.log('5th test passed');

assert.deepEqual(intersection([1,2,3,4,5],[3,5,4,5]),[3,4,5]);
console.log('1st test passed');
assert.deepEqual(intersection([4,5,3,4],[23,45]),[]);
console.log('2nd test passed');
assert.deepEqual(intersection([0],[0]),[0]);
console.log('3rd test passed');

assert.deepEqual(isAscending([2,3,4,5]),true);
console.log("1st assert passed");
assert.deepEqual(isAscending([2,3,4,0]),false);
console.log("2nd assert passed");
assert.deepEqual(isAscending([2,4,34,56]),true);
console.log("3rd assert passed");

assert.deepEqual(isDescending([12,11,10,9]),true);
console.log('1st test passed');
assert.deepEqual(isDescending([12,11,12,9]),false);
console.log('2nd test passed');
assert.deepEqual(isDescending([12,11,15,9]),false);
console.log('3rd test passed');
assert.deepEqual(isDescending([]),true);
console.log('4th test passed');
assert.deepEqual(isDescending([0]),true);
console.log('5th test passed');

assert.deepEqual(isSubset([1,2,3,4,5],[1,2],),true);
console.log('1st test passed');
assert.deepEqual(isSubset([1,2,3],[1,2,3]),true);
console.log('2nd test passed');
assert.deepEqual(isSubset([1,2,3],[]),true);
console.log('3rd test passed');

assert.deepEqual(mapLength(["aftab","musta","shubham"]),[5,5,7]);
console.log('1st test passed');
assert.deepEqual(mapLength(["aftab","musta"]),[5,5]);
console.log('2nd test passed');
assert.deepEqual(mapLength(["aftab","musta","shubham","nan"]),[5,5,7,3]);
console.log('3rd test passed');

assert.deepEqual(partition([1,2,5,3,6,4,7,8,9],5),[[1,2,3,4,5],[6,7,8,9]]);
console.log('1st test passed');
assert.deepEqual(partition([2,4,6,8,10],5),[[2,4],[6,8,10]]);
console.log('2nd test passed');
assert.deepEqual(partition([3,0],5),[[0,3],[]]);
console.log('3rd test passed');

assert.deepEqual(result(12),[89,55,34,21,13,8,5,3,2,1,1,0]);
assert.deepEqual(result(1),[0]);
assert.deepEqual(result(2),[1,0]);
assert.deepEqual(result(3),[1,1,0]);
assert.deepEqual(result(4),[2,1,1,0]);
assert.deepEqual(result(5),[3,2,1,1,0]);
assert.deepEqual(result(6),[5,3,2,1,1,0]);

assert.deepEqual(reverse([2,4,5,6,7]),[7,6,5,4,2]);
console.log('1st test passed');
assert.deepEqual(reverse([7]),[7]);
console.log('2nd test passed');
assert.deepEqual(reverse([2,4,5,8,7]),[7,8,5,4,2]);
console.log('3rd test passed');
assert.deepEqual(reverse([2,4,48,67]),[67,48,4,2]);
console.log('4th test passed');

assert.deepEqual(rotate([1,2,3,4,5],2),[3,4,5,1,2]);
console.log('1st test passed');
assert.deepEqual(rotate([1,2,3,4,5],4),[5,1,2,3,4]);
console.log('2st test passed');
assert.deepEqual(rotate([12,13,3],1),[13,3,12]);
console.log('3st test passed');

assert.deepEqual(evenIndexNumbers([1,2,3,4,5]),[1,3,5]);
console.log('1st test passed');
assert.deepEqual(evenIndexNumbers([1,2,3,4,5]),[1,3,5]);
console.log('2nd test passed');
assert.deepEqual(evenIndexNumbers([1,2,3,4,5]),[1,3,5]);
console.log('3rd test passed');

assert.deepEqual(listOfEvenNumbers([12,13,14]),[12,14]);
console.log('1st test passed');
assert.deepEqual(listOfEvenNumbers([12,13,,2,15,14]),[12,2,14]);
console.log('2st test passed');

assert.deepEqual(selectOddNumbers([12,13,15]),[13,15]);
console.log('1st test passed');
assert.deepEqual(selectOddNumbers([12]),[]);
console.log('2st test passed');

assert.deepEqual(smallestNumber([23,-1,12,12,1,0]),-1);
console.log('1st test passed');
assert.deepEqual(smallestNumber([23,12,12,11,1]),1);
console.log('2nd test passed');
assert.deepEqual(smallestNumber([23]),23);
console.log('3rd test passed');
assert.deepEqual(smallestNumber([23,-23]),-23);
console.log('4th test passed');

assert.deepEqual(sumOfElements([12,13,15]),40);
console.log('1st test passed');
assert.deepEqual(sumOfElements([12,13,15,1]),41);
console.log('2st test passed');
assert.deepEqual(sumOfElements([1,2,3,4]),10);
console.log('3st test passed');

assert.deepEqual(union([1,2,3,2,1],[12,3,4,2]),[1,2,3,4,12]);
console.log('1st test passed');
assert.deepEqual(union([0,00,12],[12,3,12,2]),[0,2,3,12]);
console.log('2nd test passed');
assert.deepEqual(union([],[12,3,4,2]),[2,3,4,12]);
console.log('3rd test passed');

assert.deepEqual(unique([2,3,2,3]),[2,3]);
console.log('1st test passed');
assert.deepEqual(unique([]),[]);
console.log('2nd test passed');
assert.deepEqual(unique([2,3,2,32]),[2,3,32]);
console.log('3rd test passed');

assert.deepEqual(zip([1,2],[2,3]),[[1,2],[2,3]]);
console.log('1st test passed');
assert.deepEqual(zip([0],[2,3]),[[0,2]]);
console.log('2st test passed');
assert.deepEqual(zip([1,2,3],[4,5]),[[1,4],[2,5]]);
console.log('3st test passed');
