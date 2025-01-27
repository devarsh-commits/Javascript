let arr=[1,2,3,4,5,6,88,66,85];
// let newarr=[]
// for (let index = 0; index < arr.length; index++) {
//     const element=arr[index];
//     newarr.unshift(element)
    
// }
//console.log(newarr); return the reverse array

let newarr=arr.map(  (value)=>{
    return value**2;
})
console.log(newarr)

const greaterthanseven = (e)=>{
    if(e>7){
        return true;
    }
    return false;
}
console.log(arr.filter(greaterthanseven))