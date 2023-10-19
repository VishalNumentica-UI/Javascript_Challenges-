function removeTheWhiteSpaces(){
    let ResultantString="";
  for(let iterator=0;iterator<text.length;iterator++){
    if((text.charAt(iterator)>='A' && text.charAt(iterator)<='Z') || (text.charAt(iterator)>='a' && text.charAt(iterator)<='z') || (text.charAt(iterator)>='0' && text.charAt(iterator)<='9')){
      ResultantString+=text.charAt(iterator);
    }
  }
  return ResultantString;
}

let text="my user name is arun99";

console.log(removeTheWhiteSpaces(text));