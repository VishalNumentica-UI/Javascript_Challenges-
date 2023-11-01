/*

2. Return the sum of smallest and largest number in an array
Example: [45, 2, 25, 11, 16]
Here the output will be 2(smallest) + 45 (largest)
Output will be 47

*/

function checkCondition(ele){
    return typeof ele === "number";
}

function sumOfMinMax(elements){

    const validElements=elements.filter(checkCondition);

    const sortElements=validElements.sort((a,b)=>a-b);

    return sortElements[0]+sortElements[sortElements.length-1];

}

const items= [45, 2, 25, 11, 16,-1,undefined,null,"string",0];

console.log(sumOfMinMax(items));