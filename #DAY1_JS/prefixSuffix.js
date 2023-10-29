function addSuffixOrPrefix(){
    let requiredFirstName=FirstName.charAt(0).toUpperCase()+""+FirstName.substring(1,FirstName.length);
    let requiredSecondName=LastName.charAt(0).toUpperCase()+""+LastName.substring(1,LastName.length);
    let Result="";
    if(condition == "prefix"){
      Result=requiredSecondName+" "+requiredFirstName;
    }
    else if(condition== "suffix"){
        Result=requiredFirstName+" "+requiredSecondName;
    }
    else{
       console.log("Invalid Condition!!");
    }
    return Result;
}


let FirstName="arun",LastName="mr",condition="suffix";
if(typeof(FirstName)=="string"){
console.log(addSuffixOrPrefix(FirstName,LastName,condition));
}
else{
  console.log("Invalid First & Last Name");
}