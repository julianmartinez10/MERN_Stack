const arr = Object.freeze([1, 2, 3, 4]);

const groceryList = Object.freeze([
    { "item": "carrots", "haveIngredient": false },
    { "item": "onions", "haveIngredient": true },
    { "item": "celery", "haveIngredient": false },
    { "item": "cremini mushrooms", "haveIngredient": false },
    { "item": "butter", "haveIngredient": true }
]);

// const needThyme = [ ...groceryList, { "item": "thyme", "haveIngredient": false } ];

// const needThyme = groceryList.concat( [ { "item": "thyme", "haveIngredient": false } ] );

// const gotTheThyme = [ ...needThyme.slice(0, 5), { ...needThyme[5], "haveIngredient": true } ];

