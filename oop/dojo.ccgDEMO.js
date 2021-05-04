/////////////////////////////PUTTING IT ALL TOGETHER////////////////////////////////////
class Card{
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
    }

    showCard(){
        console.log(`Card Name: ${this.name} \nCost: ${this.cost}`)
    }
}

class Unit extends Card{
    constructor(name, cost, power, res){
        super(name, cost);
        this.power = power;
        this.res = res;
    }

    attack(target){
        if(target instanceof Unit){
            target.res -= this.power;
        }else{
            console.log("Nah.....Bruh");
            throw new Error("Target must be a unit!")
        }
    }

    showUnit(){
        console.log(`Card Name: ${this.name} \nCost: ${this.cost} \nPower: ${this.power} \nResilience: ${this.res}`)
    }
}

class Effect extends Card{
    constructor(name, cost, stat, mag){
        super(name, cost);
        this.stat = stat;
        this.mag = mag;
        mag>0?
            this.text = `Increase target's ${this.stat} by ${this.mag}` :
            this.text = `Decrease target's ${this.stat} by ${this.mag}` 
    }

    play(target){
        if(target instanceof Unit){
            if(this.stat.toLowerCase() == "resilience"){
                target.res += this.mag;
            }else if(this.stat.toLowerCase() == "power"){
                target.power += this.mag;
            }else{
                console.log("What to do?")
            }
        }else{
            console.log("Nah.....Bruh");
            throw new Error("Target must be a unit!")
        }
    }
}

const u1 = new Unit("Red Belt Ninja", 3, 3, 4)
const u2 = new Unit("Black Belt Ninja", 4, 5, 4)
const e1 = new Effect("Hard Algo", 2, "resilience", 3)
// console.log(u1)
// console.log(u2)
console.log(e1)