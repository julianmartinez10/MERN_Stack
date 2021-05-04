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

class Sensei extends Ninja{
    constructor(name){
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }

    speakWisdom(){
        this.drinkSake();
        console.log("Your health is now " + this.health)
    }

    senseiStats(){
        console.log("Ninja Name: "+this.name,"\nHealth: " + this.health,"\nSpeed: " + this.speed,"\nStrength: " + this.strength,"\nWisdom: " + this.wisdom)
    }
}

const n1 = new Ninja("Julian", 100)
const s1 = new Sensei("Ol'Head")
n1.showStats();
s1.senseiStats();
s1.speakWisdom();
console.log("******************************")
s1.senseiStats();

