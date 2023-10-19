let str="numentica ui internship";

console.log(NoL(str));

function NoL(){
    let count=0;
    for(let i=0;i<str.length;i++){
        if((str.codePointAt(i)>=97 && str.codePointAt(i)<=122) || (str.codePointAt(i)>=65 && str.codePointAt(i)<=90)){
            count++;
        }
    }
    return count;
}