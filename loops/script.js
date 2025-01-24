console.log("Loops in javascript")
// let a=0;
// let b=1;
// let temp=null;
// for(i=0;i<=10;i++){
// temp=b;
// b=b+a;
// a=temp;
// console.log(a)
// }

let obj={
    name:"dev",
    role:"Progammer",
    salery:"5000crore"
}
for (const key in obj) {
        const element = obj[key];
        console.log(key,element)
        
}
for (const ch of "devarsh") {
    console.log(ch)
}
let k=1;
do{
    k++;
}
while(k<=10);
console.log(k);
   