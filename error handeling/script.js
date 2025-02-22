let a=prompt("Enter first number")
let b=prompt("Enter the second number");

//in javascript we can create and throw the errors
if(isNaN(a)||isNaN(b)){
    throw SyntaxError("The given input is not valid")
}

let sum=parseInt(a)+parseInt(b);


try{
    console.log("Addition of number is "+sum*x);
}
catch(Error){
    console.log("Error aa rha hai ji")
}
finally{
    console.log("Chalo ab band kar rha hu")
}

