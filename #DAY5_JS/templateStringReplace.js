/*

3. Template String Replace
For example:
const string = “Numentica is a company focused on delivering high quality code. It is located in #[location] #[state] #[phone]“;
replaceTemplateString(string, [[“location”, “Chennai”], [“state”, “Tamil Nadu”], [“phone”, “9840164723"]])
Output: Numentica is a company focused on delivering high quality code. It is located in Chennai Tamil Nadu 9840164723

*/
function replaceTemplateString(template,items){
    if(typeof template === "string"  && typeof items === "object"){
        const loc = /#\[location]/ ,state= /#\[state\]/ ,phone=/#\[phone\]/;
        const newStr = template.replace(loc, items[0][1]).replace(state,items[1][1]).replace(phone,items[2][1]);
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
