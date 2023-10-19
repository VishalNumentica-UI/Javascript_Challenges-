function interChangeAnElementWithNextElement(){
    let temp =input[index-1];
    if(index<=0 || index>=input.length){
        return input;
    }
    else if(index==input.length){
        input[index-1]=input[0];
        input[0]=temp;
    }
    else{
        input[index-1]=input[index];
        input[index]=temp;
    }
    return input;
}

const input=[10, 20, 30, 40, 50];
const index=9;

console.log(interChangeAnElementWithNextElement(input,index));
