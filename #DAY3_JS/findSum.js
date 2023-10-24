/*
5. Find sum of multiples
For example
findSum(5, 5) should return 5+10+15+20+25=75
findSum(8, 3) should return 8+16+24=48
*/

function findSum(givenNumber,multiples){
    let sum=0,index=1;
    while(index<=multiples){
         sum+=givenNumber*index;
        
         index++;
    }
    return sum;
}

let givenNumber=8,multiples=3;

if(givenNumber <= 0 || multiples <= 0){
    console.log("Invalid Arguments");
}
else{
   console.log(findSum(givenNumber,multiples));
}