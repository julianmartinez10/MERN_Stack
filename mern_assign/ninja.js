class Ninja{
    constructor(name, health){
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }

    sayName(){
        console.log(this.name)
    }

    showStats(){
        console.log("Ninja Name: "+this.name,"\nHealth: " + this.health,"\nSpeed: " + this.speed,"\nStrength: " + this.strength)
    }

    drinkSake(){
        this.health += 10;
    }
}

const n1 = new Ninja("Julian", 100)
// n1.sayName();
n1.showStats();
n1.drinkSake();
n1.drinkSake();
n1.drinkSake();
n1.showStats();
