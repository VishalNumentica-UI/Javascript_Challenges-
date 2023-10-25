/*1. Format phone number
Convert a ten digit number into US phone formatting
For example: 9840164723 to "(984)016-473"
Throw error if it's not a valid phone number
*/


function usFormatNumber(phoneNumber){

    const numberToString=phoneNumber.toString();

    if(typeof phoneNumber === "number" && numberToString.length ===10){
        return  "("+numberToString.substring(0,3)+")"+
                    numberToString.substring(3,6)+"-"+
                    numberToString.substring(6,numberToString.length-2)+
                    numberToString.charAt(numberToString.length-1);
    }
    else{
        return "Invalid Arguments is passed";
    }

}

const usNumber=9840164723;

console.log(usFormatNumber(usNumber));