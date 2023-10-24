/*
3. Given an array, filter out the invalid items
For example:
filterOut([“a”, “d”, 1, true, “cd”, 33], “number”);
Output [“a”, “d”, true, “cd”];
filterOut([“a”, “d”, 1, true, “cd”, 33], “boolean”);
Output [“a”, “d”, 1, “cd”, 33];
filterOut([“a”, “d”, 1, true, “cd”, 33], “string”);
Output [1, true, 33];
*/

function filterOut(givenArray){
    if(typeof givenArray != typeCheck){
        return givenArray;
    }  
}


let givenArray=['a', 'd', 1, true, 'cd', 33];
let typeCheck='boolean';

let resultantArray=givenArray.filter(filterOut)

console.log(resultantArray);