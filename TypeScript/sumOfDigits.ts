/*
2. Create a function to find the sum of digits in a number
Input: 96472
Output: 28 (9+6+4+7+2)
*/

function sumOfDigits(givenNumber : number): number{
    let sumOfDigits=0;
    while(givenNumber>0){
        let remainder = givenNumber % 10;
        sumOfDigits+=remainder;
        givenNumber=Math.floor(givenNumber/10);
    }
    return sumOfDigits;
}
const digits : number = 96472;

console.log(sumOfDigits(digits));


//object Creation

function createDb({name:string,age:number}):void{
console.log(studentDatabase.address)
}
const studentDatabase={
    name:"vishal",
    age :24,
    address:"Thiruvallur"
}

createDb(studentDatabase);

//Aliases

type User = {
    name : string;
    id : number;
    address : string;
}

function myfunction(userData:User):User{
  return userData;
}

const objectUser={
    name:"vishal",
    id:3,
    address:"thiruvallur"
}

myfunction(objectUser);

(()=>{
    let file="executed";
    return file;
})

let arr=[12,3,45,322];
let arr2=[231,234];
arr.push(32);
arr.pop()
arr.unshift(1)
console.log(arr)
