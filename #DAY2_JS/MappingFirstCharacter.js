let list= ["arun", "balu", "cathy", "krish", "aadhir", "aariketh", "kamal"];

let groupingNames={}
let mappingFirstCharacter=list.map(item=>item[0]);

console.log(mappingFirstCharacter);

let groupList=mappingFirstCharacter.filter((item,id)=>{
    return mappingFirstCharacter.indexOf(item) == id;
})

//console.log(removeDuplicateCharacter);

groupList.forEach(item=>{
    groupingNames[item]=[]
})

groupList.forEach(iterator=>{
    for(let word of list){
        if(word[0] === iterator){
            groupingNames[iterator].push(word);
        }
    }
})

console.log(Object.values(groupingNames));