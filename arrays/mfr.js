let arr=[1,2,3,4,5,];
// let newarr=[]
// for (let index = 0; index < arr.length; index++) {
//     const element=arr[index];
//     newarr.unshift(element)
    
// }
//console.log(newarr); return the reverse array

// let newarr=arr.map(  (value)=>{
//     return value**2;
// })
// console.log(newarr)

// const greaterthanseven = (e)=>{
//     if(e>7){
//         return true;
//     }
//     return false;
// }
// console.log(arr.filter(greaterthanseven))

//using the reduce methods in array

// const fact= (a,b)=>{
//     return a*b
// }
// console.log(arr.reduce(fact))
console.log(arr.reduce((val,val2)=>{
   return val*val2;
}))

console.log("Numbers greater than 2 :"+arr.filter((val)=>{
    if(val>2){
        return true;
    }
    return false;
}))