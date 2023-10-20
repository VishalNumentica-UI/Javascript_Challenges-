/*
8. Group names according to the initial character
Input: ["arun", "balu", "cathy", "krish", "aadhir", "aariketh", "kamal"]
Output
["arun", "aadhir", "aariketh"]
["balu"]
["cathy"]
["krish", "kamal"]
*/

let givenArray=["arun", "balu", "cathy", "krish", "aadhir", "aariketh", "kamal"];

console.log(groupNamesUsingInitialCharacter(givenArray));


function groupNamesUsingInitialCharacter(){
  // givenArray.sort();
   
   let groupNames={}

   let initials=givenArray.map(item=>item[0]);
   console.log(initials)

   let initialsCharFilter =initials.filter((item,id) =>{
        return initials.indexOf(item) === id;
   })
   console.log(initialsCharFilter)
   
   initialsCharFilter.forEach(item=>{
        groupNames[item]=[]
    })

   initialsCharFilter.forEach(char=>{
       for(let word of givenArray){
        if(word[0] == char){
            groupNames[char].push(word)
        }
       }
       console.log(Object.values(groupNames))
   })

   console.log(initialsCharFilter);



}
