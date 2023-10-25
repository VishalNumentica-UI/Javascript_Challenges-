/*
2. Convert to minutes
Users can give a time like 2:30 (which means 2 hours 30 minutes). Write a function to convert this 2:30 to 150 minutes
Try with different hours and minutes and cover all possible negative cases
*/

function convertToMinutes(hours,minutes){
     if(typeof hours ==="number" && typeof minutes === "number" && hours >= 0 && minutes >= 0){
        return hours*60 + minutes;
     }
     return "Invalid Arguments";
}

const givenTime="24:00".split(":");

const givenHour=parseInt(givenTime[0]),givenMinutes=parseInt(givenTime[1]);

console.log(convertToMinutes(givenHour,givenMinutes));