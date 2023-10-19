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

