
function rand(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}
let adj={
    1:"Crazy",
    2:"Amazing",
    3:"fire"
}
let sn={
    1:"Engine",
    2:"foods",
    3:"Garments"
};
let aw={
    1:"bros",
    2:"Limited",
    3:"Hub"
}
// let random=rand(1,3);
function x(){
    let random=rand(1,3);
    return adj[random];

}
function y(){
    let random=rand(1,3);
    return sn[random];

}
function z(){
    let random=rand(1,3);
    return aw[random];

}
let a=x();
let b=y();
let c=z();
console.log(` the generated buisness name is ${a} ${b} ${c}`)
// console.log(random);