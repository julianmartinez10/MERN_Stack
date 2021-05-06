const groceries = ["pearl onions", "cremini mushrooms", "thyme"];


const modifiedFood = groceries.map(food=>food + "!")

console.log(modifiedFood)

let oFoods = groceries.filter(ofood=> ofood.includes("o"))  //  returns something true or false
console.log(oFoods)

// const groceryList = groceries.map( item => `<li>${item}</li>` );
