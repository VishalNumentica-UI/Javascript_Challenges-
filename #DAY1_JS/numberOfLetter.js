function numberOfLetters(){
    let count=0;
    for(let iterator=0;iterator<text.length;iterator++){
        if((text.codePointAt(iterator)>=97 && text.codePointAt(iterator)<=122) || (text.codePointAt(iterator)>=65 && text.codePointAt(iterator)<=90)){
            count++;
        }
    }
    return count;
}

let text="numentica ui internship -66 jj JJ @#$$%%q#!@#$!231Uyyyy";

console.log(numberOfLetters(text));