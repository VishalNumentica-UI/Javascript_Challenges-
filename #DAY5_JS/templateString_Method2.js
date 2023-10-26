
function replaceTemplateString(template,items){
    if(typeof template === "string"  && typeof items === "object"){
  
        let splitTemplate=template.split(" "),newStr="";
  
        for(let index=0;index<splitTemplate.length;index++){
        
          if(splitTemplate[index].charAt(0)=='#' && splitTemplate[index].charAt(splitTemplate[index].length-1)===']'){
            
              if(splitTemplate[index].slice(2,splitTemplate[index].length-1) === items[0][0]){
                    newStr+=items[0][1]+" ";
                    
              }
              else if(splitTemplate[index].slice(2,splitTemplate[index].length-1) === items[1][0]){
                   newStr+=items[1][1]+" ";
              }
              else if(splitTemplate[index].slice(2,splitTemplate[index].length-1) === items[2][0]){
                    newStr+=items[2][1];
              }
          }
          else{
            newStr+=splitTemplate[index]+" ";
          }
  
        }
        return newStr;
    }
    else{
    return "Invalid Arguments is passed";
  }
  }
  
  const givenString = `Numentica is a company focused on delivering high quality code. It is located in #[location] #[state] #[phone]`;
  
  const details=[
      ["location","Chennai"],
       ["state", "Tamil Nadu"],
       ["phone", "9840164723"]
  ];
  
  console.log(replaceTemplateString(givenString,details))