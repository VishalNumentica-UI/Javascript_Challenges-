/*

5. Group multiples from 1 to 10
const arr1 = [34, 12, 10, 15, 7, 21, 81]
Output = [{1: [34, 12, 10, 15, 7, 21, 81]}, { 2: [34, 12, 10]}, {3: [12, 15, 21, 81] }]

*/

//checking the Edge cases
function checkCondition(ele){
   return typeof ele === "number" && ele>=0;
}

//Filtering the divisible number from 1 to 10
function multiples(index){
    return function (elements){
        return elements%index==0;
    }
}

function groupMultiples(item){

    const validElements=item.filter(checkCondition);
    
    const obj={};

    for(let index=1;index<=10;index++){
        
        let resultantArray=validElements.filter(multiples(index));
        obj[index]=resultantArray;
      
    }
    return(obj)
}


const elements=[34, 12, 10, 15, 7, 21, 81,-1,-2,-4];

console.log(groupMultiples(elements));