// creating a calculator that calculates faulty calculator
 function add(a,b){
    if(Math.random() < 0.1){
        console.log(a-b)
    }
    else{
         console.log(a+b);
    }
 }
 function sub(a,b){
    if(Math.random() < 0.1){
        console.log(a/b)
    }
    else{
         console.log(a-b);
    }
 }
 function mul(a,b){
    if(Math.random() < 0.1){
        console.log(a+b);
    }
    else{
        console.log(a*b)
    }
 }
 function div(a,b){
    if(Math.random() < 0.1){
        console.log(a**b);
    }
    else{
         console.log(a/b)
    }
 }
 div(52,2);
 add(5,6);