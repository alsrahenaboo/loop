 
for(let i=0;i<=5;i++){
    alert("the number is :" + i );
}
// q8)__________________________________________-
let x=[];
for(let i=0;i<=5;i++){
    x +=[i];

}
alert(x);
// q9______________________________________________________
for(let i=0;i<=20;i++){
    if(i%3==0){
        console.log(i);

    }
}

let user =Number( prompt("enter the number between 0 and 100"));
while(user<0 || user>100){
    alert("Error Massege");
    user =Number( prompt("enter the number"));
}
let inter=Number(prompt("enter the number"));
let sum=0;
for(let i=0;i<=inter;i++){
    sum+=i;
    
}
alert(sum);