/*
7. Repeat string
For example
repeat(“arun”, 3);
output “arunarunarun”;
*/


function repeatString(givenString,repeatNumber){
    return givenString.repeat(repeatNumber)
}

let givenString='arun',repeatNumber=3;
    if(repeatNumber<=0){
       console.log("Invalid");
     }
    else{
    console.log(repeatString(givenString,repeatNumber));
    }