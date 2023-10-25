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

function filterOut(arrayItem, typeToCheck) {
    if (typeof arrayItem !== typeToCheck){
        return arrayItem;
    }  
}

const givenArray=["a", "d", -45, 66, true,{name:"dhan",age:23}, null,"cd"];
const typeCheck='string';

const resultantArray=givenArray.filter((val) => filterOut(val, typeCheck));

console.log(resultantArray);