// console.log("Hii devarsh bhai kya haal chaal");
// console.log("Khana peen hua ki nahi")
// setTimeout(()=>{
//     console.log("I am an event funcrion")
// },2000);
// console.log("Pahala yeah run hoga")
const fn = (arg) => {
    console.log(arg);
  
}


const callback =(args)=>{
    console.log(args);
}

let func=(src,callback)=>{
let scrpt=document.createElement("script");
scrpt.src=src;
scrpt.onload=callback("kendi yoyo honey singh")
}
func("https://cdnjs.cloudflare.com/ajax/libs/script.js/2.0.2/script.min.js",callback)
console.log('hii bhai');

