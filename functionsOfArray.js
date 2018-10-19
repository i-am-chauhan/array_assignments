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
const getGreatestNumber=function(source){
  let result=0;
  for(let index=0; index<source.length; index++){
    if(result<source[index])
      result=source[index];
  }
  return result;
}
exports.greatestNumber=getGreatestNumber;

const getSmallestNumber=function(source){
  let result=source[0];
  for(let index=0; index<source.length; index++){
    if(result>source[index])
      result=source[index];
  }
  return result;
}
exports.getSmallestNumber=getSmallestNumber;

const average=function(source){
  let result=0;
  for(let index=0; index<source.length; index++){
    result+=source[index];
  }
  return result/(source.length);
}
exports.average=average;

const mapLength=function(source){
  let result=[];
  for(let index=0; index<source.length; index++){
    result.push(source[index].length);
  }
  return result;
}
exports.mapLength=mapLength;

const countOdds=function(source){
  let count=0;
  for(let index=0; index<source.length; index++){
    if(source[index]%2!=0)
      count++;
  }
  return count;
}
exports.countOdds=countOdds;

const countEvens=function(source){
  let count=0;
  for(let index=0; index<source.length; index++){
    if(source[index]%2==0)
      count++;
  }
  return count;
}
exports.countEvens=countEvens;

const countNumbersAbove=function(source,limit){
  let count=0;
  for(let index=0; index<source.length; index++){
    if(source[index]>limit)
      count++;
  }
  return count;
}
exports.countNumbersAbove=countNumbersAbove;

const countNumbersBelow=function(source,limit){
  let count=0;
  for(let index=0; index<source.length; index++){
    if(source[index]<limit)
      count++;
  }
  return count;
}
exports.countNumbersBelow=countNumbersBelow;

const indexOfValue=function(source,value){
  let count='';
  for(let index=0; index<source.length; index++){
    if(source[index]==value){
      count=index;
    }
  }
  return count;
}
exports.indexOfValue=indexOfValue;

const isAscending=function(source){
  message=true;
  for(let index=0; index<source.length-1; index++){
    message=(source[index]<source[index+1]);
    if(!message){
      return message;
    }
  }
  return message;
}
exports.isAscending=isAscending;

const isDescending=function(source){
  message=true;
  for(let index=0; index<source.length-1; index++){
    message=(source[index]>source[index+1]);
    if(!message){
      return message;
    }
  }
  return message;
}
exports.isDescending=isDescending;

const extractDigits = function(number){
  let digitsOfNumbers=[];
  let string=""+number;
  for(let index=0; index<string.length; index++){
    digitsOfNumbers.push(+string[index]);
  }
  return digitsOfNumbers;
}
exports.extractDigits=extractDigits;

const unique = function(source){
  let testObject={};
  let result=[];
  for(let index=source.length-1; index>=0; index--){
    testObject[source[index]]=index;
  }
  let keys=Object.keys(testObject);
  for(let index=0; index<keys.length; index++){
    result.push(+keys[index]);
  }
  return result;
}
exports.unique=unique;

const union = function(list1,list2){
  let result=list1.slice();
  for(let index=0; index<list2.length; index++){
    result.push(list2[index]);
  }
  return unique(result);
}
exports.union=union;

const intersection = function(source1,source2){
  let testObject={};
  let result=[];
  for(let index=source1.length-1; index>=0; index--){
    testObject[source1[index]]=source1[index];
  }
  let length=source2.length;
  for(let index=0; index<length; index++){
    if(testObject[source2[index]]==source2[index])
      result.push(source2[index]);
  }
  return unique(result);
}
exports.intersection=intersection;

const difference = function(source1,source2){
  let testObject={};
  let result=[];
  for(let index=source2.length-1; index>=0; index--){
    testObject[source2[index]]=source2[index];
  }
  let length=source1.length;
  for(let index=0; index<length; index++){
    if(testObject[source1[index]]!=source1[index])
      result.push(source1[index]);
  }
  return unique(result);
}
exports.difference=difference;
