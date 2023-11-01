/*

3. Calculate total hours passed between two time
Accepted input format example "9:00 AM"
Ex: calculateTotalHoursElapsed("9:00 AM", "10:00 AM") //Output 1 Hour
Ex: calculateTotalHoursElapsed("9:00 AM", "3:12 PM") // Output 6 Hour 12 minutes

*/

function formattingTime(hour,minute){
    if(minute >= 1){
       return `${hour} Hour ${minute} Minute`;
    }
    return `${hour} Hour`
}

function calculatedifferences(time1,time2,symbol){
      console.log(time1+""+time2+""+symbol)
    if(symbol == ">"){
        console.log(24*60 -(time2 -time1));
    }
    else{
    console.log(time2 - time1);
    }
}
function findDifferenceInTime(initialHour,finalHour,initialMinute,finalMinute,notation){
    let result=0;
    let calculateinitialTime=0;
    let calculatefinalTime=0;

    if(notation === "PM" || notation == "AM"){
        calculateinitialTime=initialHour*60+initialMinute;
        calculatefinalTime=finalHour*60+finalMinute;
        if(initialHour>finalHour){   
            console.log(calculatedifferences(calculateinitialTime,calculatefinalTime,">"));
        }
        else{
            console.log(calculatedifferences(calculateinitialTime,calculatefinalTime,"<"));  
        }
       
    }
    else if(notation == "AM"){

    }


}
function calculateTotalHoursElapsed(startTime,endTime){
     
    startTime=startTime.replace(/\s/g,"");
    endTime=endTime.replace(/\s/g,"");
  
    let startTimeNotation=startTime.slice(startTime.length-2,startTime.length);
    let startHourMinute = startTime.slice(0,startTime.length-2).split(":");
   
    let endTimeNotation=endTime.slice(endTime.length-2,endTime.length)
    let endHourMinute=endTime.slice(0,endTime.length-2).split(":");
     
    let startHour1=Number(startHourMinute[0]);
    let startMinute1=Number(startHourMinute[1]);

    let startHour2=Number(endHourMinute[0]);
    let startMinute2=Number(endHourMinute[1]);
    
 
   if(startTimeNotation === endTimeNotation){
         return findDifferenceInTime(startHour1,startHour2,startMinute1,startMinute2,startTimeNotation);
   }
   
}

console.log(calculateTotalHoursElapsed("11 : 44    AM", "10:45 AM"))