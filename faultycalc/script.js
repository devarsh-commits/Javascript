let a=prompt("Enter the first number");
let b=prompt("Enter the second number");
let c=prompt("Enter the operation to perform");

let obj={
    "+":"-",
    "-":"*",
    "*":"-",
    "/":"**"
}

if(Math.random()>0.1){
    alert(`the result is ${eval(` ${a} ${c} ${b} `)}`);
}
else{
    c=obj[c];
    alert(`the result is ${eval(` ${a} ${c} ${b} `)}`);

}