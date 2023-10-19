function findTheUniqueElement(){
    let ElementInArray=[];
    for(let item of list1){
        if(ElementInArray.indexOf(item)==-1){
            ElementInArray.push(item);
        }
    }
    return ElementInArray;
}

function findCommonElementInAnArray(){
    let Result=[];
    for(let x=0;x<RemoveDuplicateInList1.length;x++){
        for(let y=0;y<RemoveDuplicateInList2.length;y++){
            if(RemoveDuplicateInList1[x]==RemoveDuplicateInList1[y]){
                 Result.push(RemoveDuplicateInList1[x]);
            }
        }
     }
     return Result;
    
    }
    
let list1=[1, 3, 33, 8, 54, 54, 13, 13];
let list2=[76, 8, 13, 54];

let RemoveDuplicateInList1=findTheUniqueElement(list1);
let RemoveDuplicateInList2=findTheUniqueElement(list2);

console.log(findCommonElementInAnArray(RemoveDuplicateInList1,RemoveDuplicateInList2));

