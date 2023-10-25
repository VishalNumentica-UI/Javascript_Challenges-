/*
7. Repeat string
For example
repeat(“arun”, 3);
output “arunarunarun”;
*/


function repeatString(givenString,repeatNumber){
    if(repeatNumber<=0){
        return "Invalid";
    }
    return givenString.repeat(repeatNumber)
}

let word='arun',multipleWord=1;

console.log(repeatString(word,multipleWord));
    