//function to select odd numbers in an array
const selectOddNumbers=function(source){
  let result=[]
  for(let index=0; index<source.length; index++){
    if(source[index]%2!=0){
      result.push(source[index]);
    }
  }
  return result;
}
exports.selectOddNumbers=selectOddNumbers;

//function to select even numbers in an array
const selectEvenNumber=function(source){
  let result=[]
  for(let index=0; index<source.length; index++){
    if(source[index]%2==0){
      result.push(source[index]);
    }
  }
  return result;
}
exports.listOfEvenNumbers=selectEvenNumber;

//function to add all numbers of an given array
const sum=function(source){
  result=0;
  for(let index=0; index<source.length; index++){
    result+=source[index];
  }
  return result;
}
exports.sum=sum

//function to select that values which have odd index
const selectOddIndexValues=function(source){
  let result=[];
  for(let index=0; index<source.length; index+=2){
    result.push(source[index]);
  }
  return result;
}
exports.selectOddIndexValues=selectOddIndexValues;

//function to reverse all elements of an array
const reverse=function(source){
  let result=[];
  let length=source.length-1;
  for(let index=length; index>=0; index--){
    result.push(source[index]);
  }
  return result;
}
exports.reverse=reverse;

//function to generate fibonacci series in an array upto given number of terms
const createFibonacciSeries= function(numberOfTerms){
  let result=[];
  result[0]=0;
  if(numberOfTerms>1){
  result[1]=1;
  }
  for(let index=2; index<numberOfTerms; index++){
    result[index]=result[index-1]+result[index-2];
  }
  return result;
}
exports.fibonacci=createFibonacciSeries;

//function to generate fibonacci in reverse order
const reverseFibonacci=function(noOfTerms){
  let list=createFibonacciSeries(noOfTerms);
  let result=reverse(list);
  return result;
}
exports.reverseFibonacci=reverseFibonacci;

//function to find the greatest number in an given array
const greatestNumber=function(source){
  let result=0;
  for(let index=0; index<source.length; index++){
    if(result<source[index])
      result=source[index];
  }
  return result;
}
exports.greatestNumber=greatestNumber;
