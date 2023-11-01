/*

4. Encoder and Decoder
Encode a string in such a way that the output will be the next characters given as input
For example:
encode(“arun”, 2)  -> ctwp
encode(“aruz”, 4) -> evyr
And similarly decode will return the opposite
decode(“ctwp”, 2) -> arun
decode(“evyr”, 4) -> arun

*/


//Encoding
function encoding(input,skipChar){
   // console.log(input,skipChar);
   if(typeof input === "string" && typeof skipChar === "number"){

   let alphabets="abcdefghijklmnopqrstuvwxyz";
   let encodedString="";

   for(let index=0;index<input.length;index++){
    
    const findIndex=alphabets.indexOf(input[index]);
   
    let result=(findIndex+skipChar)%alphabets.length;
    //To handle decoding while negative value 
    if(result<0){
        result=26+result;
    }
    encodedString+=alphabets[result];
   }

   return encodedString;
}
  else{
     console.log("Invalid Arguments is passed");  
   }        
}

//Decoding
function decoding(data,backChar){
     let resultantString=encoding(data,-backChar);
     return resultantString;

}

const word="arun",nextChar=4,condition="decode";

if((condition === "encode" || condition === "decode")){
    if(condition === "encode"){
        console.log(encoding(word,nextChar));
    }
    else if(condition === "decode"){
        console.log(decoding(word,nextChar));
       
    }
}
else{
    console.log("Invaild Arguments is passed");
}

