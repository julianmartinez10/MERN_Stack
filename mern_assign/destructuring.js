// const cars = ['Tesla', 'Mercedes', 'Honda']
// const [ randomCar ] = cars
// const [ ,otherRandomCar ] = cars
// //Predict the output
// console.log(randomCar)          //  PREDICTION: print out a random car              //  prints out Tesla
// console.log(otherRandomCar)     //  PREDICTION: print out a different random car    //  prints out Mercedes

// const employee = {
//     name: 'Elon',
//     age: 47,
//     company: 'Tesla'
// }
// const { name: otherName } = employee;
// //Predict the output
// console.log(name);                  //  PREDICTION: will throw an error                 //  ReferenceError: name is not defined
// console.log(otherName);             //  PREDICTION: will print Elon                     //  did not get to here

// const person = {
//     name: 'Phil Smith',
//     age: 47,
//     height: '6 feet'
// }
// const password = '12345';
// const { password: hashedPassword } = person;  
// //Predict the output
// console.log(password);                  //  PREDICTION: will print 12345                    //  printed 12345
// console.log(hashedPassword);            //  PREDICTION: will print 12345                    //  printed undefined

// const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
// const [,first] = numbers;
// const [,,,second] = numbers;
// const [,,,,,,,,third] = numbers;
// //Predict the output
// console.log(first == second);               //  PREDICTION: will print out 8                    //  false
// console.log(first == third);                //  PREDICTION: will print out 3                    //  true

// const lastTest = {
//     key: 'value',
//     secondKey: [1, 5, 1, 8, 3, 3]
// }
// const { key } = lastTest;
// const { secondKey } = lastTest;
// const [ ,willThisWork] = secondKey;
// //Predict the output
// console.log(key);                               //  PREDICTION: value will print out                //  value
// console.log(secondKey);                         //  PREDICTION: will print out array [1,5,1,8,3,3]  //  [1,5,1,8,3,3]
// console.log(secondKey[0]);                      //  PREDICTION: will print out 1                    //  1
// console.log(willThisWork);                      //  PREDICTION: will print out 5                    //  5





