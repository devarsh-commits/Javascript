//IIFE
async function sleep() {
    return new Promise((response,reject)=>{
        setTimeout(()=>{
            response(45);
        },1000);
    })
    
}


function sum(a,b,c){
    return a+b+c;
}


(async function main(params) {
    let a=await sleep();
    let b=await sleep(); 
    console.log(a) 
    
    //destructuring in javascript
    // let [x,y]=[10,20]
    // console.log(x,y);
    let [x,y,...rest]=[10,20,70,80,90,100]  //rest of numbers will be assingened to numbers 
    console.log(x,y,...rest);    

    let obj = {
        m:1,
        n:2
    }
    let {m,n} =obj;
    console.log(m,n);
   
    let arr=[4,5,6];
    console.log(sum(arr[0],arr[1],arr[2]));
    console.log(sum(...arr)); //spread operator
    
    
})()
