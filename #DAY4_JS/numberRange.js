/*
4. Check if the number is in range
For example: checkInRange([1, 10], 4) // true since 4 is in between 1 and 10
checkInRange([10, 100], 8) // true false 8 is not in between 10 and 100
*/


function inRange(givenArray,checkNumber){

    const newArray=[];

    for(let index=0; index<givenArray.length; index++){
        
    let item=givenArray[index];

    if(typeof item === "number"){
         newArray.push(item);  
      }

   }

   if(newArray.length === 2 && typeof checkNumber == "number"){

      let initial=newArray[0],final=newArray[1];
    
      if(checkNumber>=initial && checkNumber<=final){   
         return true;    
      }
      else{  
         return false;   
      }

   }
   else{

      return "Invalid Arguments is passed";

   }
}


const Elements=[-1, 1 , undefined,null],inBetween=0;

console.log(inRange(Elements,inBetween));