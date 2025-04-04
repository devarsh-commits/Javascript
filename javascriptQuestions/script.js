// //Question no 1
// let naam=["ikka","Modiji","Amit Shah","Krrish","BatMan","Luv","Hen","Ben"];
// let house=[[],[],[],[]];
// let fun=()=>{
//     for (const el of naam) {
//         if(el.length<6){
//             house[0].push(el);
//         }
//         else if(el.length>6 && el.length<8){
//             house[1].push(el)
//         }
//         else if(el.length>8 && el.length<12){
//             house[2].push(el);
//         }
//         else{
//             house[3].push(el)
//         }
//     }
//     console.log(house)
// }
// fun();

//Question no 2;
// let arr=[1,1,2,5,4,4,6,8,9,9,10,10];
// let newar=[]
// for(let i=0;i<arr.length;i++){
//     if(arr[i]!=arr[i+1]){
//         newar.push(arr[i]*2)
//     }
//     else{
//         newar.push(arr[i])
//     }
// }
// console.log(newar)

// let naam="Devarsh";
// let mirror=naam.split("").reverse().join("");
// console.log(mirror)
 
// let naam="Devarsh12";

// if(naam.charAt(0)===naam.charAt(0).toUpperCase() && naam.charAt(1)===naam.charAt(1).toLowerCase() && !isNaN(naam.charAt(naam.length-1))){
//     console.log("hanji")
// }
// else{
//     console.log('no ji');
    
// }

// let arr=[1,5,3,4,6,-9,10,3];
// let sum=0;
// for (let index = 0; index < arr.length; index++) {
//  //here we are using sign() to find out the number is positive oe negative   
// //  let sum=0;
//  if(Math.sign(arr[index])!=-1){
//     sum+=arr[index]
//  }
//  else{
//     break;
//  }
//  console.log(sum)

    
// }

//question no 6;

// let vovel="IceCream";
// let count=0;
//  let arr=vovel.split("");
//  for(let i=0;i<arr.length;i++){
//     if(arr[i].match(/a/gi)||arr[i].match(/e/gi)||arr[i].match(/i/gi)||arr[i].match(/o/gi)||arr[i].match(/u/gi)){
//         count=count+1;

//     }
//     else{
//         continue;
//     }
//  }
//  console.log(count)

//Question no 8:
// let arr=[1,2,3,4,5,6,7,8,9];
//  const doublenum=(num)=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//           num=num*2;
//           resolve(num);
//         },500)
//     })
//  }
//  async function hehe(arr) {
//     let newarr=[];
//    for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     let result=await doublenum(element);
//     newarr.push(result);
    
//    }
//    console.log(newarr)
//  }
//  hehe(arr).then(result =>{
//     console.log(result)
//  })

//Question no:9

// const delay=()=>{
//     return new Promise((resolve)=>{
//         let rand=Math.random()*1;
//        setTimeout(()=>{
//             resolve("Order is confirmend")
//        },rand*1000) 
//     })
// }

// async function placeOrder() {
//    let msg=await delay(); 
//    console.log(msg)
// }
// placeOrder()

//question 10

