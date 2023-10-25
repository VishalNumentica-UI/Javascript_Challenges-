/*
6. Find the sum of even numbers in an array. find all the even numbers in an array and add them
For example
findEvenSum([38, 3, 2, 8, 31])
output -  48
*/


function findEvenSum(givenArray){
    let sum=0;

    for(let index=0; index<givenArray.length; index++){

        let element=givenArray[index];

        if(element%2==0 && typeof givenArray[index] === 'number'){
           sum+=element;
        }

    }
    return sum
}

let items=[38, 3, 2, 8, 31,-1,-6,-2,false,true,"#"];

console.log(findEvenSum(items));