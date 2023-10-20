/*4. Merge two arrays and then sort the numbers from lowest to highest
Input
const ar1 = [1, 4, 6];
const ar2 = [2, 5, 3,-1];
Output: [1, 2, 3, 4, 5, 6];
*/

function mergeTwoArraysAndSort(){
    let newArray=givenArray1.concat(givenArray2);
   
    if(newArray.includes(true,false) || newArray.includes(null)|| newArray.includes(undefined)){
        return "Invalid Arguments";
      }
   
     return(newArray.sort());
    
}

let givenArray1=[1, 4, 6,-1,23],givenArray2=[2, 5, 3,null];


console.log(mergeTwoArraysAndSort(givenArray1,givenArray2));


