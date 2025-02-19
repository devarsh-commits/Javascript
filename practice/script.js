console.log("script is running");
 
let callback = (arg)=>{
console.log(arg)  //creating a callback function here;
}
let func=(callback)=>{
    let div=document.createElement("div")
    div.innerHTML="I have been inserted";
    document.querySelector(".container").insertAdjacentElement("afterbegin",div)
     document.body.onload=callback("hanji bhai load ho gaya hu");
    }
func(callback)

//now we goin to learn about promise in javascript

let pro=new Promise((resolve,reject)=>{
    let num=Math.random();
    if(num>0.5){
        resolve("Kaam ho gaya");
    }
    else{
        reject("Kaam nahi ho paaya")
    }
})
pro.then((e)=>{
    console.log(e)
}).catch((e)=>{
    console.log(e)
})
function rand(){
    let r=Math.ceil(Math.random()*255);
    let g=Math.ceil(Math.random()*255);
    let b=Math.ceil(Math.random()*255);
    return `rgb(${r},${g},${b})`
}

let a=setInterval(()=>{
    document.body.style.backgroundColor=rand();
},1000)
console.log(a);
document.querySelector(".container").style.backgroundColor="rgb(255,45,78)";
