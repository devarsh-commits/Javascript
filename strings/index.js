console.log("This is string tutorial")
let a="Devarsh";
console.log(a)
console.log(a.length);

// for (const char in a) {
//     console.log(char);
// }

for(let i=0;i<=7;i++){
    console.log(a[i]);
}
console.log(a.toUpperCase);
console.log(a.includes('a'));
console.log(a.charAt(3));
let b="Dubey";
console.log(`my name is ${a} and my surname is ${b}`)
console.log(a.concat(b));
console.log(a.codePointAt(2))

console.log(" hello my name is '\devarsh'\ and my surname is '\dubey'\ ")
console.log(a.slice(2,6));
console.log(a.slice(-1,0))
console.log(a.replace("arsh","il"))
console.log(a.concat(b),"Bhai bhai")