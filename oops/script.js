// let animal ={
//     eats:true
// }
// let rabbit={
//     jumbs:true
// }
// rabbit.__proto__=animal;

class Animal{
    constructor(name){
        this.name=name;
        console.log('object is created');
        
    }
    eats(){
        console.log("kha raha hu bhai")
    }
    jumps(){
        console.log('Kud rha hu bhai');
    }
    
}

class Lion extends Animal{
    constructor(name){
        super();
        this.name=name;
        console.log('Lion obj is created');
        
    }
    roar(){
        console.log("Lion is roaring")
    }
}

let a=new Animal("Shubham");
a.jumps();
a.eats()
console.log(a);
let l=new Lion();
l.jumps();
l.roar();