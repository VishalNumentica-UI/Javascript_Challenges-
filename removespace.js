/*
Remove spaces in a string
Input: "    fox i  n the b ox      "
Output: "foxinthebox"
*/

let str="    fox i  n the b ox      ";

console.log(removeSpace(str));

function removeSpace(){
    let newStr="";
for(let i=0;i<str.length;i++){
    if((str.charAt(i)>='A' && str.charAt(i)<='Z') || (str.charAt(i)>='a' && str.charAt(i)<='z')){
          newStr+=str.charAt(i);
    }
}
  return newStr;
}