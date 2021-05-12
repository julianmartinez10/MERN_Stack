/////////////////////////////DEMO STARTS HERE////////////////////////////////////
class Mammal{
    constructor(species, weight){
        this.species = species;
        this.weight = weight;
        this.energy = 100;
    }

    eat(numCal){
        // if(numCal > 100){
        //     this.energy += 10;
        // }else{
        //     this.energy += numCal;
        // }
        numCal>=100? this.energy += 100 : this.energy += numCal
    }





}
/////////////////////////////INHERITANCE AND SUPERCLASS////////////////////////////////////
//  'extends' allows us to inherit from parent Mammal
class Dog extends Mammal{
    constructor(weight, breed, name){
        //  super represents the parent constructor
        super("Canine", weight)
        // this.weight = weight;
        this.breed = breed;
        this.name = name;
    }

    wagTail(){
        this.energy += 1000
    }

}

class Cat extends Mammal{
    constructor(weight, breed, name, isEvil){
        //  super represents the parent constructor
        super("Feline", weight)
        // this.weight = weight;
        this.breed = breed;
        this.name = name;
        this.isEvil = isEvil;
    }

    scratch(){
        console.log("MeoooowTho")
        this.energy -= 10
    }
    //  can be added to parent 
    attack(otherAnimal){
        otherAnimal.energy -= 100
        this.energy -= 5
    }

}

const d1 = new Dog(25, "Boxer", "Zoe")
// console.log(d1)
// d1.eat(100)
// console.log(d1)

const c1 = new Cat(50, "some type of cat", "Garfield", true)
console.log(c1)
c1.eat(100)
console.log(c1)

