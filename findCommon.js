<<<<<<< HEAD
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

=======
//findCommon([1, 3, 33, 8], [76, 8, 13, 54])

let arr1=[1, 3, 33, 8];
let arr2=[76, 8, 13, 54];

console.log(findCommon(arr1,arr2));

function findCommon(){
let arr3=[];
for(let i=0;i<arr1.length;i++){
    for(let j=0;j<arr2.length;j++){
        if(arr1[i]==arr2[j]){
             arr3.push(arr1[i]);
        }
    }
 }
 return arr3;

}

>>>>>>> 2fdc60809e19f4ac6bbf16cb1198fe217a63a0c4
