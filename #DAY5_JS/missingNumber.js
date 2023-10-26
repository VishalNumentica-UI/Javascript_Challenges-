/*

1. Find the missing number / numbers
Example: Given an array of numbers in random order, find the missing numbers
[7, 10, 12, 9] // output [8, 11] since these are the numbers missing in 7, 9, 10, 12
Note: The numbers will be given as input in any order.

*/

//checking the Edge cases
function checkCondition(ele){
    return typeof ele === "number";
}

function missingNumbers(elements){

    const validElements=elements.filter(checkCondition);

    const sortedElements=validElements.sort((a,b)=>a-b);

    const resultantArray=[];

    const minimum=sortedElements[0], maximum = sortedElements[sortedElements.length-1];

    for(let index=minimum;index<=maximum;index++){
        
        if(sortedElements.includes(index)){
            continue;
        }
        else{
            resultantArray.push(index);
        }
    }

    return resultantArray;
}

const items= [7, 10, 12, 9];

console.log(missingNumbers(items));