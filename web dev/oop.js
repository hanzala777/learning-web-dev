class Animal {
    constructor (name){
        this.name = name;
        console.log("constructor is Running");
    }
    eats(){
        console.log("Kha raha hoon");
    }
    jumps(){
        console.log("Kood raha hoon");
    }
}
class Lion extends Animal {
    constructor(name){
        super(name);
        console.log("Lion constructor is Running");
    }
    eats(){
        console.log("Kha raha hoon hiran");
    }
}
let a = new Animal('Bunny');
let b = new Lion('Shera');

b.eats();
b.jumps();
console.log(b.name); 