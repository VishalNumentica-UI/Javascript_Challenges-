/*Add Suffix or Prefix
Input: addSuffixOrPrefix("arun", "mr", "prefix")
Should outupt : Mr Arun
Input: addSuffixOrPrefix("charles", "jr", "suffix")
Should outupt : Charles Jr
*/


let str1="arun",str2="mr",condition="prefix";

console.log(addSuffixOrPrefix(str1,str2,condition));

function addSuffixOrPrefix(){
    let nstr1=str1.charAt(0).toUpperCase()+""+str1.substring(1,str1.length);
    let nstr2=str2.charAt(0).toUpperCase()+""+str2.substring(1,str2.length);
    let str3="";
    if(condition="prefix"){
      str3=nstr2+" "+nstr1;
    }
    else{
        str3=nstr1+" "+nstr2;
    }
    return str3;
}