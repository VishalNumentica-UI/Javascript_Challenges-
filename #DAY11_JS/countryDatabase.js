/*
Write a elegant solution for the below Acceptance Criteria. 
Import the json into your js file and start working. 
Please note that the function you write is generic and the edge cases covered.
*/

import userInformations from './usersDatabase';

const usersDataSets=[...userInformations]

function IsValidUserDatabase(databaseRecord){
  
    if( (typeof databaseRecord.id === "number"  && databaseRecord.id >= 0) && 
        (typeof databaseRecord.first_name === "string" && databaseRecord.first_name.length>=1) &&
        (typeof databaseRecord.last_name === "string" && databaseRecord.last_name.length>=1) &&
        (typeof databaseRecord.email === "string" && databaseRecord.email.length >=5) &&
        (typeof databaseRecord.gender === "string" && databaseRecord.gender.length>=1) &&
        (typeof databaseRecord.country === "string" && databaseRecord.country.length>=1) &&
        (typeof databaseRecord.income === "number" && databaseRecord.income>=0)
    ){
        return true
    }
    else{
        return false
    }

}

function maximumCountryChecker(resultantItems){
    let maxIncome=0;
    let countryName="";
    for(eachItem of Object.keys(resultantItems)){
         if(resultantItems[eachItem] > maxIncome){
            maxIncome=resultantItems[eachItem];
            countryName = eachItem;
         }
    }
    
    return countryName;

}

//Find the country which has the highest income.
function countryWithHighestIncome(DataSets){
    const highestIncome =DataSets.sort((a,b)=>{
        return b.income - a.income;
    })

    return highestIncome[0].country;
}


//Find the country which has the combined highest income
function countryWithCombinedHighestIncome(DataSets){

    const countryCombinedIncome={};

    DataSets.forEach(eachUserData => {

        if(countryCombinedIncome[eachUserData.country]){
            
            countryCombinedIncome[eachUserData.country]=countryCombinedIncome[eachUserData.country]+eachUserData.income;
        }
        else{
            countryCombinedIncome[eachUserData.country]=eachUserData.income;
        }
        
    });
   
    return maximumCountryChecker(countryCombinedIncome);
    
    
}


//Get all the users info (complete info) who has the email which ends with .gov
function emailEndsWithGivenInput(DataSets){
    let userInformationOfEmail=[]
   
    DataSets.forEach(dataSet =>{
        if(dataSet.email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
            let useremail=dataSet.email;
            let indexOfAt=useremail.indexOf('@');
            let sliceAtCharacters=useremail.slice(indexOfAt,useremail.length);
            if(sliceAtCharacters.includes(".gov")){
                userInformationOfEmail.push(dataSet);
            }
        }
        
    })
   
    return userInformationOfEmail;

}

//Find the country name which has the maximum combined income for Female
function CombinedFemaleIncome(DataSets){
    let femaleCombinedIncome={};
    DataSets.forEach(userData =>{
          
        if(userData.gender.toLowerCase() === "female"){
              if(femaleCombinedIncome[userData.country]){
                femaleCombinedIncome[userData.country]=femaleCombinedIncome[userData.country]+userData.income;
              }
              else{
                femaleCombinedIncome[userData.country]=userData.income;
              }
        }
    })
     
    return maximumCountryChecker(femaleCombinedIncome);

}


function validUserData(userRecord){
    
  let validRecords=userRecord.every(IsValidUserDatabase);

  if(validRecords){

  console.log(`Country with highest income is ${countryWithHighestIncome(userRecord)}`);

  console.log(`Country with combined highest income is ${countryWithCombinedHighestIncome(userRecord)}`);

  console.log(emailEndsWithGivenInput(userRecord))

  console.log(`Country name which has the maximum combined income for Female is ${CombinedFemaleIncome(userRecord)}`)
 }
 else{
    console.log("Invalid Arguments is passed");
 }
}

//function Call
validUserData(usersDataSets)