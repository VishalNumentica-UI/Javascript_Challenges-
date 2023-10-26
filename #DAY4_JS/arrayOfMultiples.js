/*
3. Array of Multiples
Get the result of the array in multiples
For example: [2, 5];
Result: [2, 4, 6, 8, 10]
*/

function arrayOfMultiples(givenArray){
    let newArray=[];
   
   //Checking the Edge cases
   for(let index=0; index<givenArray.length; index++){
      const item=givenArray[index];

      if(typeof item === "number" && item >= 0){
          newArray.push(item);  
       }
    }

   if(newArray.length === 2){

    const multiple=newArray[0],iterator=newArray[1];
    let initial=1;
    
    newArray=[];

    while(initial<=iterator){
        newArray.push(initial*multiple);
        initial++;
    }

   }
   else{

    return "Invalid Arguments";

   }
   
   return newArray;
}


const elements=[2,4,undefined,null,{name:"vishal"}];

console.log(arrayOfMultiples(elements));