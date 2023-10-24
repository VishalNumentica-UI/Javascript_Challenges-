/*
6. Find the sum of even numbers in an array. find all the even numbers in an array and add them
For example
findEvenSum([38, 3, 2, 8, 31])
output -  48
*/


function findEvenSum(givenArray){
    let sum=0;

    for(let index=0;index<givenArray.length;index++){
        let number=givenArray[index];
        if(number%2==0){
           sum+=number;
        }
    }
    return sum
}

let givenArray=[38, 3, 2, 8, 31,-1,-6,-2,false,true,"#"],newArray=[];

for(let index=0;index<givenArray.length;index++){
    if(typeof givenArray[index] === 'number'){
        newArray.push(givenArray[index]);
    }
}

console.log(findEvenSum(newArray));