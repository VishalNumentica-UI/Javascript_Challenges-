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

//Checking the Edge cases
function validationCheck(text,index){

    if(typeof text === "string" && typeof index === "number"){
        return true;
    }
    else{
        return "Invalid Arguments is passed!"
    }

}

//Encoding
function encoding(input,skipChar){
        let newString="";

        input = input.toLowerCase();

        for(let index=0;index<input.length;index++){

            let item=input.codePointAt(index),newlength=item+skipChar;

            if(newlength>122){
                item-=122;
                item+=96+skipChar;
            }
            else{
                item+=skipChar;
            }
            newString+=String.fromCharCode(item);
            
        }
      
        return newString;
}
   

//Decoding
function decoding(data,backChar){

       let newString="";

        data = data.toLowerCase();

        for(let index=0;index<data.length;index++){
            let item=data.codePointAt(index),newlength=item-backChar;
            
            if(newlength<97){
                item=97-newlength;
                console.log(item);
                item=122-item+1;
                console.log(item);
            }
            else{
                item-=backChar;
            }
            newString+=String.fromCharCode(item);
            
        }
      
        return newString;
  

}

const word="arun",nextChar=4,condition="decode";

if((condition === "encode" || condition === "decode") && validationCheck(word,nextChar)){
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

