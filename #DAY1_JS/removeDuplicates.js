function removeDuplicateElementInArray(){
    let resultantArray=[];
    for(let Item of element){
        if(resultantArray.indexOf(Item)==-1){
            resultantArray.push(Item);
        }
    }
    return resultantArray;
}

let element=[-10, 29, 4, -4, 16, 29, -10,4]

console.log(removeDuplicateElementInArray(element));