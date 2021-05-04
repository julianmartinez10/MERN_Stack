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
            target.res-= this.power;
        }else{
            console.log("Nah bruh, only units can be targets!")
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
            if(this.stat.toLowerCase() == "res"){
                target.res += this.mag;
            }else if(this.stat.toLowerCase() == "power"){
                target.power += this.mag;
            }else{
                console.log("Whatitdo!?!?!?!?!?!")
            }
        }else{
            console.log("Nah bruh");
            throw new Error("Target must be a unit");
        }
    }
}

const u1 = new Unit("Red Belt Ninja", 3, 3, 4);
const e1 = new Effect("Hard Algo", 2, "resilience", 3);
const u2 = new Unit("Black Belt Ninja", 4, 5, 4);
const e2 = new Effect("Unhandled Promise Rejection", 1, "resilience", -2);
const e3 = new Effect("Pair Programming", 3, "power", 2);
// console.log(u2)
// u1.attack(u2);
// console.log(u2);
console.log(e1);
console.log(e2);
// u2.attack(e1);
// console.log(e1);
// u1.showUnit();
// u2.showUnit();
// console.log(u2);