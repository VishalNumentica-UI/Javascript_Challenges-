/*

2. Find number of pairs in an array which has the sum provided as a parameter
For example:
const arr1 = [4, 2, 5, 6, 8, 1];
const sum = 6;
numberOfPairs(arr1, sum);
// Pais that matches are [4, 2] => 6. [5, 1] => 6
So output 2

*/

function isMatches(elements,groupSum){

    const validElements=elements.filter(function(validItem){
       return  typeof validItem === "number";
    })

    let sum=0,counter=0;

    for(let index1=0 ; index1<validElements.length; index1++){
       
        for(let index2=index1 + 1 ;index2<validElements.length;index2++){

            if(validElements[index1]+validElements[index2] ===  groupSum){
                counter++;
            } 

        }
    }
    return counter;
}

const items=[4, 2, 5, 6, 8, 1,true,false,4],value=6;

console.log(isMatches(items,value));