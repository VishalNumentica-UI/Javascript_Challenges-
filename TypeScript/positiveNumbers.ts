/*
1. Create a function that receives an array and push the positive numbers to a new array and return this new array
Input: [-14, 4, 5, -2, 76]
Output: [4, 5, 76]

*/

function positiveNumbers(givenArray : number[]): number[]{

    const resultantItems : number[]= givenArray.filter((item : number) =>{
        return item>=0;
    })
    return resultantItems;
}

const items : number[] = [-14, 4, 5, -2, 76];

console.log(positiveNumbers(items));

export{}