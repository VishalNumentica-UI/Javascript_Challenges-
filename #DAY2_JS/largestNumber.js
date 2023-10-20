/*3. Find the largest number in an array according to input
Input: findLargest([3, 4, 5, 6, 88], 2) // Note here the second argument is 2, so the function to find the second largest number in array
findLargest([3, 4, 5, 6, 88], 4) // Note here the second argument is 4, so the function to find the fourth largest number in array
*/



//Using the sort method

function findLargestNumberUsingSortMethod(inputArray,indexArgument){
    inputArray.sort(function(a,b){return b-a});
    console.log(inputArray)
    if(indexArgument>inputArray.length || indexArgument<=0){
        return "Invaild Index Argument";
    }
    else{
       return inputArray[indexArgument-1];
   }
   
}


//Using the Brute Force Method
function findLargestNumberUsingBruteForceMethod(inputArray,indexArgument){
    for(let index1=0;index1<inputArray.length;index1++){
        for(let index2=index1+1;index2<inputArray.length;index2++){
            if(inputArray[index1]<inputArray[index2]){
                let valueHolder=inputArray[index1];
                inputArray[index1]=inputArray[index2];
                inputArray[index2]=valueHolder;
            }
        }
    }
    console.log(inputArray);
    return inputArray[indexArgument-1];

}

let inputArray=[30, 4, 15, 6, 88],indexArgument=5;

console.log(findLargestNumberUsingSortMethod(inputArray,indexArgument));

console.log(findLargestNumberUsingBruteForceMethod(inputArray,indexArgument));