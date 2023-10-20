/*
6. Find the missing numbers in an array
Input: [68, 71, 69, 73]
Output: missing numbers in range [68-73] is 70, 72

*/

function missingNumberInAnArray(){
    givenArray.sort();
    let resultant=[];
    console.log(givenArray)
    let lowestValue=givenArray[0],highestValue=givenArray[givenArray.length-1];
    //creating the index for array
    let indexing=[];
    for(let initial=lowestValue;initial<=highestValue;initial++){
        indexing[initial]=0;
    }

    for(let item=0;item<givenArray.length;item++){
        indexing[givenArray[item]]=-1;
        console.log(givenArray[item])
    }
    
    for(let initial=lowestValue;initial<=highestValue;initial++){
         if(indexing[initial]==-1){
            continue;
         }
         else{
             resultant.push(initial);
         }
    }
    return resultant;
}

//Using the includes method
let arr=[68, 71, 69, 73];

let sorting= arr.sort(function(a,b){return a-b});

let newArray=[],lowest=sorting[0],highest=sorting[sorting.length-1];

for(let index=lowest;index<highest;index++){
    if(arr.includes(index)){
        continue;
    }
    else{
        newArray.push(index);
    }
}
console.log(newArray);





let givenArray= [68, 56, 71, 69, 73];

console.log(missingNumberInAnArray(givenArray));