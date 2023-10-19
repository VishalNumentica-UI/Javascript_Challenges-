let arr=[-10, 29, 4, -4, 16, 29, -10,4]
//Using the Objects
arr1=[]
obj={}

for(let i=0;i<arr.length;i++){
    obj[arr[i]]=0;
}
for(x in obj){
    arr1.push(x);
}

console.log(arr1);

//Using the for of loop
let nArr=[]

for(let loop of arr){
    if(nArr.indexOf(loop)==-1){
        nArr.push(loop);
    }
}
console.log(nArr)