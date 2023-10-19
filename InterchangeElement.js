//interChange([10, 20, 30, 40, 50], 2)

Arr_Element=[10, 20, 30, 40, 50];
index=5;

console.log(NewArray(Arr_Element,index));

function NewArray(){
    let temp=Arr_Element[index-1];
    if(Arr_Element.length<1){
        return Arr_Element;
    }
    else if(index==Arr_Element.length){
       Arr_Element[index-1]=Arr_Element[0];
       Arr_Element[0]=temp;
    }
    else{
    Arr_Element[index-1]=Arr_Element[index];
    Arr_Element[index]=temp;
    }
    return Arr_Element;
}