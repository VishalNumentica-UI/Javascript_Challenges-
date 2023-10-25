/*
5. Remove zeros either trailing / leading
Input - "000000123423423000"
removeZeros(input, "leading") // output 123423423000
removeZeros(input, "trailing") // output 000000123423423
*/

function removeZeros(input,condition){

    if(typeof input === "string" && (condition ==="leading" || condition === "trailing")){
        if(condition === "leading"){
            return parseInt(input);
        }
        else{
            const newString=input.split("").reverse().join("");
 
            const stringToNumber=parseInt(newString).toString().split("").reverse().join("");
            
            return stringToNumber;

        }
    }
    return "Invalid Arguments is passed";

}

const givenInput="000000123423423000",checkCondition="trailing";

console.log(removeZeros(givenInput,checkCondition));
