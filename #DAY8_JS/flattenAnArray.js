/*
1. Write a function to flatten an array of arrays. The resulting array should contain all the values of the input array, without nesting.
flatten([1, [2, [3, [4, [5, 6]]]]])
Output => [1, 2, 3, 4, 5, 6]
Avoid using Array.flatten or any other utility function that will help with flattening the array directly. You can use map, filter or reduce or for loops
*/


function flattenAnArray(arrayItems){

    let resultantArray=[]
    
    arrayItems.forEach(item => {
           if(Array.isArray(item)){
            resultantArray.push(...flattenAnArray(item));
           }
           else{
            resultantArray.push(item);
           }
    });

    return resultantArray;
}

const items=[1, [2, [3, [4, [5, 6]]]]];

console.log(flattenAnArray(items));
