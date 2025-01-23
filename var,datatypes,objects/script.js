// console.log("hello this is my first javascript")
// var a=5
// // var b=8
// var c=10
// var result=a+b+c;
// console.log("The addition of following numbers are "+result);

//how to know the type of javascript
console.log(typeof a);
var a=66;
console.log(a)
//var a global variables it not only upto the block
{
    var a=85;
    
}
console.log(a) //here the value of var a is changed
 let b=85
 console.log(b)
 {
    let b=44
    console.log(b)
 }
 console.log("Value of b outside the block " + b)

 let x="Devarsh";
 let y=55;
 let z=2.36;
 const p=true;
 let o=undefined;
 let q=null;
 console.log(x,y,z,p,o,q)
 console.log(typeof x,typeof y,typeof z,typeof p,typeof o,typeof q);


 let obj={
    name:"Devarsh",
    "Job_code":5600,
    "is handsome":true

 }
 console.log(obj)
 obj.salary="200crore";
 console.log(obj)
 obj["is handsome"]=false;
 console.log(obj)

