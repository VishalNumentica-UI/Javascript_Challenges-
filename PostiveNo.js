let arr=[-14, 4, 5, -2, 76];

console.log(postive_No(arr));

function postive_No(){
    const li=[]
    for(let l=0;l<arr.length;l++){
          if(arr[l]>0){
             li.push(arr[l])
          }
    }
    return li;
}

