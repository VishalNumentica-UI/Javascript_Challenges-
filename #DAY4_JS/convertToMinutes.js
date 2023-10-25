/*
2. Convert to minutes
Users can give a time like 2:30 (which means 2 hours 30 minutes). Write a function to convert this 2:30 to 150 minutes
Try with different hours and minutes and cover all possible negative cases
*/

function convertToMinutes(formatTime){
   let formatString=formatTime.split(":");
   const hours=parseInt(formatString[0]),minutes=parseInt(formatString[1]);
     if(typeof hours === "number" && typeof minutes === "number" && hours >= 0 && minutes >= 0){
        return hours*60 + minutes;
     } 
     return "Invalid Arguments";
}

const givenTime="2:30";

console.log(convertToMinutes(givenTime));