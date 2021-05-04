// console.log(hello);
// var hello = 'world';
// //  HOISTING
// var hello;
// console.log(hello);
// hello = 'world'
// //  PREDICTION: var hello will be hoisted
// //  undefined will be printed to console
// //  OUTCOME: undefined printed to console

// var needle = 'haystack';
// test ();
// function test(){
//     var needle = 'magnet';
//     console.log(needle);
// }
// //  HOISTING
// var needle = 'haystack';
// function test(){
//     var needle = 'magnet';
//     console.log(needle);
// }
// test();
// //  PREDICTION: magnet will print to console
// //  OUTCOME: magnet prints to console

// var brendan = 'super cool';
// function print(){
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan);
// //  HOISTING
// var brendan = 'super cool';
// function print(){
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan);
// //  PREDICTION: super cool will be printed to console
// //  function will not run because it's not been 
// //  called on
// //  OUTCOME:    super cool printed out to console

// var food = 'chicken';
// console.log(food);
// eat();
// function eat(){
//     food = 'half-chicken';
//     console.log(food);
//     var food = 'gone';
// }
// //  HOISTING
// var food = 'chicken';
// console.log(food);
// function eat(){
//     var food = 'gone';
//     food = 'half-chicken';
//     console.log(food);
// }
// eat();
// //  PREDICTION: chicken & half-chicken will be printed out to console
// //  OUTCOME:    chicken & half-chicken both printed out to console

// mean();
// console.log(food);
// var mean = function(){
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);
// //  HOISTING

// //  PREDICTION: error cause mean is not a function
// //  OUTCOME:    TypeError: mean is not a function

// console.log(genre);     //  undefined
// var genre = "disco";    //  defined
// rewind();
// function rewind(){      //  hoisted up
//     genre = "rock";
//     console.log(genre); //  rock printed to console
//     var genre = "r&b";  //  add variable var genre to function 
//     console.log(genre); //  r&b printed to console
// }
// console.log(genre);     //  disco is printed out to console
// //  HOISTING
// var genre;
// console.log(genre);     //  prints out undefined
// genre = "disco"
// function rewind(){
//     var genre;
//     genre = "rock";
//     console.log(genre); //  prints out rock
//     genre = "r&b";
//     console.log(genre); //  prints out r&b
// }
// console.log(genre);     //  prints out disco
// //  PREDICTION: disco, rock, r&b will be printed out to console
// //  OUTCOME: undefined, rock, r&b, disco were printed out to console

// dojo = "san jose";          //  sets dojo to be san jose
// console.log(dojo);          //  prints out "san jose"
// learn();                    //  calling on hoisted function
// function learn(){           //  function 
//     dojo = "seattle";       //  dojo being set to seattle
//     console.log(dojo);      //  seattle being printed to console
//     var dojo = "burbank";   //  variable dojo being set to burbank
//     console.log(dojo);      //  burbank being printed to console
// }
// console.log(dojo);          //  san jose being printed to console again
//  HOISTED
// dojo = "san jose"
// function learn(){
//     var dojo;
//     dojo = "seattle";
//     console.log(dojo);  //  seattle
//     dojo = "burbank";
//     console.log(dojo);  //  burbank
// }
// console.log(dojo);      //  san jose
// learn();
// console.log(dojo);      //  san jose
// //  PREDICTION: san jose, seattle, burbank, san jose will be 
// //  printed out to console
// //  OUTCOME:    prediction was correct

// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));
// function makeDojo(name, students){
//     const dojo = {};
//     dojo.name = name;
//     dojo.students = students;
//     if(dojo.students > 50){
//         dojo.hiring = true;
//     }
//     else if (dojo.students <= 0){
//         dojo = "closed for now";
//     }
//     return dojo;
// }
// //  HOISTING
// function makeDojo(name, students){
//     const dojo = {};
//     dojo.name = name;
//     dojo.students = students;
//     if(dojo.students > 50){
//         dojo.hiring = true;
//     }
//     else if (dojo.students<= 0){
//         dojo = "closed for now";
//     }
//     return dojo;
// }
// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));
// //  PREDICTION: undefined, undefined will be printed to console
// //  OUTCOME: TypeError: Assignment to constant variable because 
// //  you cannot create something if set to const