// const user1 = {
//     name: "Kermit",
//     email: "kermit@sesame.org",
//     friend: {
//         name: "Miss Piggy",
//         email: "piggy@sesame.org"
//     }

// }

// class Vehicle{
//     constructor(manufacturer, model, color){
//         this.miles = 0;
//         this.manufacturer = manufacturer;
//         this.model = model;
//         this.color = color;
//     }

//     drive(){
//         this.miles += 10;
//     }
// }

// const car = new Vehicle("Chevy", "Silverado 2500HD", "od green");
// car.drive;
// console.log(car.miles)

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

const m1 = new Mammal("dog", "25")
const m2 = new Mammal("cat", "15")
const m3 = new Mammal("cat", "50")
const m4 = new Mammal("dog", "60")

console.log(m1)
console.log(m2)
console.log(m3)