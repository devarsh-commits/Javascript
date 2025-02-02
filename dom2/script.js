// console.log("HEllo world");
// console.log("Random color generation");
// const col={
//     1:"red",
//     2:"green",
//     3:"blue",
//     4:"voilet",
//     5:"yellow",
//     6:"orange",
//     7:"indigo",
//     8:"grey" 
// }
// ran = () =>{
//      let r=Math.floor(Math.random()*(8-1)+1);
//      return r;
// }
// document.querySelectorAll(".box").style.backgroundColor=col[ran()];
document.querySelectorAll(".box").forEach(e =>{
    e.style.backgroundColor ="green"
})
document.getElementById("bx").style.backgroundColor='red';
document.querySelectorAll(".box").forEach(el =>{
const r=Math.random()*256;
const g=Math.random()*256;
const b=Math.random()*256;
    el.style.backgroundColor = `rgb(${r},${g},${b})`;
})