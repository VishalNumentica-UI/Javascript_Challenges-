/*

3. Template String Replace
For example:
const string = “Numentica is a company focused on delivering high quality code. It is located in #[location] #[state] #[phone]“;
replaceTemplateString(string, [[“location”, “Chennai”], [“state”, “Tamil Nadu”], [“phone”, “9840164723"]])
Output: Numentica is a company focused on delivering high quality code. It is located in Chennai Tamil Nadu 9840164723

*/
function replaceTemplateString(template,items){
  if(typeof template === "string"){
  for(let element of items){

  let inputText=element[0];
  const replaceRegexp = new RegExp(`#\\[${inputText}\\]`, 'g');
  let displayText=element[1];
  template=template.replace(replaceRegexp,displayText);

   }
   return template;
 }
 else{
   return "Invalid Arguments is passed";
 }
 
}


const givenString = `Numentica#[arun] is a arun focused on delivering high quality code. It is located in #[arun] #[company] #[phone]`;

const details=[
    ['arun','Chennai'],
     ["company", "Tamil Nadu"],
     ["phone", "9840164723"]
];

console.log(replaceTemplateString(givenString,details))


