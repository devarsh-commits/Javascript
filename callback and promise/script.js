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

let func = (src,callback) => {
  let scr=document.createElement("script");
  scr.src=src;
  scr.onload=callback("Hanjii",fn("kendi yooy"))
  document.head.append(scr);
}

func("https://cdnjs.cloudflare.com/ajax/libs/script.js/2.0.2/script.min.js",callback)
console.log('hii bhai');

