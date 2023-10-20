/*
7. Return the sum of two largest numbers
Input: [32, 66, 80, 120, 45]
Output: 200
*/

let givenArray=[32, 66, 80, 120, 45];

console.log(findLargestOfTwoNumbers(givenArray));

function findLargestOfTwoNumbers(){
      let resultArray=givenArray.sort(function(a,b){return b-a});
      if(resultArray.length<=1){
        return "Invaild Index Argument";
    }
    else{
       return resultArray[0]+resultArray[1];
   }
}