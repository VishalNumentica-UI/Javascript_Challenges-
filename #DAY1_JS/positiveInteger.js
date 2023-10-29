
function positiveIntegersInAnArray(){
    const ResultantList=[]
    for(let item=0;item<Elements.length;item++){
        if(typeof(Elements[item])=="boolean" || Elements[item]==null){
            continue;
        }
        else if(Elements[item]>0){
             ResultantList.push(Elements[item])
          }
    }
    return ResultantList;
}

let Elements=[-14, 4, 5, -2, 76, "ab", true,{name:"vishal",age:234},null];

console.log(positiveIntegersInAnArray(Elements));