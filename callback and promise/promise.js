// console.log('This is promise');

let pro=new Promise((resolve,reject)=>{
    let a=Math.random();
    if(a<0.5){
        reject("Random number is not supporting you");
    }
    else{
        setTimeout(()=>{
            console.log("Yes i am done");
            resolve("code is resolved");
        },2000);
    }
})
let pro2=new Promise((resolve,reject)=>{
    let a=Math.random();
    if(a<0.5){
        reject("Random number is not supporting you 2");
    }
    else{
        setTimeout(()=>{
            console.log("Yes i am done2");
            resolve("code is resolved2");
        },3000);
    }
})


 let p3=Promise.allSettled([pro,pro2])
 p3.then((e)=>{
    console.log(e);
 }).catch((err)=>{
    console.log(err);
 })