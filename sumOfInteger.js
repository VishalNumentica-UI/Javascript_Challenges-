let val=96472

console.log(soInteger(val));

function soInteger(){
    let sum=0;
     while(val>0){
        let rem=val%10;
        sum+=rem;
        val=Math.floor(val/10);
     }
     return sum;
}