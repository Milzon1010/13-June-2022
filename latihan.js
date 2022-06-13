// if (day === 'Saturday' || day === 'Sunday') {
//     console.log('Enjoy the weekend!');
//   } else {
//     console.log('Do some work.');
//   }

// ??latihan modul codeacademy bagaimana menentukan if dalam Boolean

// let mood = 'sleepy';
// let tirednessLevel = 6;

// if (mood === 'sleepy' && tirednessLevel > 8) {
//   console.log('time to sleep');
// } else {
//   console.log('not bed time yet');
// }

// Truthy and Falsy
// let wordCount = 1;

// if (wordCount) {
//   console.log("Great! You've started your work!");
// } else {
//   console.log('Better get to work!');
// }


// let favoritePhrase = '';

// if (favoritePhrase) {
//   console.log("This string doesn't seem to be empty.");
// } else {
//   console.log('This string is definitely empty.');
// }

// Truthy and Falsy Assignment
// Evaluasi kemungkinan yang singkat!
// Katakanlah Anda memiliki situs web dan ingin mengambil 
// nama pengguna pengguna untuk membuat salam yang dipersonalisasi.
// Terkadang, pengguna tidak memiliki akun, 
// membuat variabel nama pengguna menjadi salah
// Kode di bawah ini memeriksa apakah nama pengguna 
// ditentukan dan memberikan string default jika tidak

// let username = '';
// let defaultName;
 
// if (username) {
//   defaultName = username;
// } else {
//   defaultName = 'Stranger';
// }
 
// console.log(defaultName); // Prints: Stranger

// If you combine your knowledge of logical operators 
// you can use a short-hand for the code above. In a boolean condition, 
// JavaScript assigns the truthy value to a variable 
// if you use the || operator in your assignment:
// Because || or statements check the left-hand condition first, 
// the variable defaultName will be assigned 
// the actual value of username if it is truthy,
// and it will be assigned the value of 'Stranger' if username is falsy.
// This concept is also referred to as short-circuit evaluation.


// tool = 'marker';

// // Use short circuit evaluation to assign writingUtensil variable below:
// let writingUtensil = tool || 'pen';

// console.log(`The ${writingUtensil} is mightier than the sword.`);


//Ternary Operator
// sama dengan artinya if then 
// let isNightTime = true;
 
// if (isNightTime) {
//   console.log('Turn on the lights!');
// } else {
//   console.log('Turn off the lights!');
// }

// isNightTime ? console.log('Turn on the lights!') : console.log('Turn off the lights!');

// let isLocked = false;

// isLocked ? console.log('You will need a key to open the door.') : console.log('You will not need a key to open the door.');

// let isCorrect = true;

// isCorrect ? console.log('Correct!') : console.log('Incorrect!');

// let favoritePhrase = 'Love That!';

// favoritePhrase === 'Love That!' ? console.log('I love that!') : console.log("I don't love that!");

//Else If Statements
// We can add more conditions to our if...else with an else if statement
// The else if statement allows for more than two possible outcomes
// You can add as many else if statements as you’d like, to make more complex conditionals!
// The else if statement always comes after the if statement and before the else statement
// The else if statement also takes a condition. Let’s take a look at the syntax:
// let stopLight = 'yellow';
 
// if (stopLight === 'red') {
//   console.log('Stop!');
// } else if (stopLight === 'yellow') {
//   console.log('Slow down.');
// } else if (stopLight === 'green') {
//   console.log('Go!');
// } else {
//   console.log('Caution, unknown!');
// }
// The else if statements allow you to have multiple possible outcomes. if/else if/else statements are read from top to bottom,
// so the first condition that evaluates to true from the top to bottom is the block that gets executed.

// let season = 'summer';

// if (season === 'spring') {
//   console.log('It\'s spring! The trees are budding!');
// } else if(season === 'winter') {
//   console.log('It\'s winter! Everything is covered in snow.');
// } else if(season === 'fall') {
//   console.log('It\'s fall! Leaves are falling!');
// } else if(season === 'summer') {
//   console.log('It\'s sunny and warm because it\'s summer!');
// } else {
//   console.log('Invalid season.');
// }

// The switch keyword
// else if statements are a great tool if we need to check multiple conditions. In programming,
// we often find ourselves needing to check multiple values and handling each of them differently
// For example:
// let groceryItem = 'papaya';
 
// if (groceryItem === 'tomato') {
//   console.log('Tomatoes are $0.49');
// } else if (groceryItem === 'papaya'){
//   console.log('Papayas are $1.29');
// } else {
//   console.log('Invalid item');
// }

// A switch statement provides an alternative syntax that is easier to read and write.

// Contoh:
// let groceryItem = 'papaya';
 
// switch (groceryItem) {
//   case 'tomato':
//     console.log('Tomatoes are $0.49');
//     break;
//   case 'lime':
//     console.log('Limes are $1.49');
//     break;
//   case 'papaya':
//     console.log('Papayas are $1.29');
//     break;
//   default:
//     console.log('Invalid item');
//     break;
// }


// userName = "Milzon";

// userName ? console.log(`Hello, ${userName}!`) : console.log("Hello");

// let userQuestion = "will i eat dinner tonight?";

// console.log(`${userName} has asked - ${userQuestion}`);

// let randomNumber = Math.floor(Math.random() * 8);

// console.log(randomNumber);

// let eightBall = '';

// switch(randomNumber){
//   case 0:
//     eightBall = 'It is certain';
//     break;
//   case 1:
//     eightBall = 'It is decidedly so';
//     break;
//   case 2:
//     eightBall = 'Reply hazy try again';
//     break;
//   case 3:
//     eightBall = 'Cannot predict now';
//     break;
//   case 4:
//     eightBall = 'Do not count on it';
//     break;
//   case 5:
//     eightBall = 'My sources say no';
//     break;
//   case 6:
//     eightBall = 'Outlook not so good';
//     break;
//   case 7:
//     eightBall = 'Signs point to yes';
//     break;
// }

// console.log(`The Magic Ball says, ${eightBall}.`)

// let raceNumber  = Math.floor(Math.random() * 1000);
// let early = true;
// let age = 19;

// if(early && age > 18){raceNumber +- 1000;}

// else if(early && age > 18){
//     console.log(`Race will begin at 9.30, your race number is: ${raceNUmber}.`);
// }

// else if(!early && age > 18){
//     console.log(`Race will begin at 11.00, your race number is: ${raceNUmber}.`);
// }
// else if(age < 18){
//     console.log(`Race will begin at 12.30, your race number is: ${raceNUmber}.`);
// }
// else{
//     console.log(`Please approach the registration desk, thanks!`);
// }





//What are Functions?

// const width = 10;
// const height = 6;
// const area =  width * height;
// console.log(area); // Output: 60

// Area of the first rectangle
// const width1 = 10;
// const height1 = 6;
// const area1 =  width1 * height1;
// console.log(area1);

 
// Area of the second rectangle
// const width2 = 4;
// const height2 = 9;
// const area2 =  width2 * height2;
// console.log(area2);

 
// Area of the third rectangle
// const width3 = 10;
// const height3 = 10;
// const area3 =  width3 * height3;
// console.log(area3);

// Function Declarations
// greetWorld(); // Output: Hello, World!
 
// function greetWorld() {
//   console.log('Hello, World!');
// }

// function getReminder(){
//     console.log('Water the plants');
//   }
  
//   function greetInSpanish(){
//     console.log('Buenas Tardes')
//   }

// function sayThanks() {
//     console.log('Thank you for your purchase! We appreciate your business.');
//   }
  
//   sayThanks();
//   sayThanks();
//   sayThanks();

// function sayThanks(name) {
//     console.log('Thank you for your purchase ' + name + '! We appreciate your business.');
//   }
  
//   sayThanks('Cole');

// function greeting (name = 'stranger') {
//     console.log(`Hello, ${name}!`)
//   }
   
//   greeting('Nick') // Output: Hello, Nick!
//   greeting() // Output: Hello, stranger!
   
// function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs'){
//     console.log(`Remember to buy ${item1}`);
//     console.log(`Remember to buy ${item2}`);
//     console.log(`Remember to buy ${item3}`);
//   }
  
// Return   =======

// function rectangleArea(width, height) {
//     let area = width * height;
//   }
//   console.log(rectangleArea(5, 7)) // Prints undefined

// function rectangleArea(width, height) {
//     if (width < 0 || height < 0) {
//       return 'You need positive integers to calculate area!';
//     }
//     return width * height;
//   }

// function monitorCount(rows, columns) {
//     return rows * columns;
//   }
  
//   const numOfMonitors = monitorCount(5, 4);
  
//   console.log(numOfMonitors);

// Helper Functions ========

// function multiplyByNineFifths(number) {
//     return number * (9/5);
//   };
   
//   function getFahrenheit(celsius) {
//     return multiplyByNineFifths(celsius) + 32;
//   };
   
//   getFahrenheit(15); // Returns 59

//   contoh diatas menjelaskan :
// getFahrenheit() is called and 15 is passed as an argument.
// The code block inside of getFahrenheit() calls multiplyByNineFifths() 
// and passes 15 as an argument.

// multiplyByNineFifths() takes the argument of 15 for the number parameter.

// The code block inside of multiplyByNineFifths() 
// function multiplies 15 by (9/5), which evaluates to 27.

// 27 is returned back to the function call in getFahrenheit().
// getFahrenheit() continues to execute. 
// It adds 32 to 27, which evaluates to 59.
// Finally, 59 is returned back to the function call getFahrenheit(15).

// function monitorCount(rows, columns) {
//     return rows * columns;
//   }
  
//   function costOfMonitors(rows, columns) {
//    return monitorCount(rows, columns)  * 200;
//   }
  
//   const totalCost = costOfMonitors(5, 4);
  
//   console.log(totalCost);

//   Function Expressions

    // adalah fungsi yang disimpan ke dalam suatu variable. 
    // Setelah disimpan, maka variabel tersebut dapat digunakan sebagai fungsi.

// const plantNeedsWater = function(day) {
//     if(day === 'Wednesday'){
//       return true;
//     } else {
//       return false;
//     }
//   };
  
//   plantNeedsWater('Tuesday');
  
//   console.log(plantNeedsWater('Tuesday'));


// Arrow Functions

// const rectangleArea = (width, height) => {
//     let area = width * height;
//     return area;
//   };

//   const plantNeedsWater = (day) => {
//     if (day === 'Wednesday') {
//       return true;
//     } else {
//       return false;
//     }
//   };

// Concise Body Arrow Functions

// So if we have a function:

// const squareNum = (num) => {
//     return num * num;
//   };

// We can refactor the function to:

// const squareNum = num => num * num;

// const plantNeedsWater = (day) => {
//     return day === 'Wednesday' ? true : false;
//   };


// const plantNeedsWater = day => day === 'Wednesday' ? true : false;

// Blocks and Scope

// const logSkyColor = () => {
//     let color = 'blue'; 
//     console.log(color); // blue 
//   }

// if (dusk) {
//     let color = 'pink';
//     console.log(color); //pink
//   }

// const city = 'New York City';

// const logCitySkyline = () => {
//   let skyscraper = 'Empire State Building';
//   return 'The stars over the ' + skyscraper + ' in ' + city;
// };

// console.log(logCitySkyline());


// Global Scope

// const color = 'blue';
 
// const returnSkyColor = () => {
//   return color; // blue 
// };
 
// console.log(returnSkyColor()); // blue

// const satellite = 'The Moon';
// const galaxy = 'The Milky Way';
// const stars = 'North Star';

// const callMyNightSky = () => {
// 	return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
// };

// console.log(callMyNightSky());


// Block Scope =========

// const logSkyColor = () => {
//     let color = 'blue'; 
//     console.log(color); // blue 
//   };
   
//   logSkyColor(); // blue 
//   console.log(color); // ReferenceError

// const logVisibleLightWaves = () => {
//     const lightWaves = 'Moonlight';
//     console.log(lightWaves);
//   };
  
//   logVisibleLightWaves();
  
//   // console.log(lightWaves);


// Scope Pollution ==========

// let num = 50;
 
// const logNum = () => {
//   num = 100; // Take note of this line of code
//   console.log(num);
// };
 
// logNum(); // Prints 100
// console.log(num); // Prints 100

// const satellite = 'The Moon';
// const galaxy = 'The Milky Way';
// let stars = 'North Star';

// const callMyNightSky = () => {
//   stars = 'Sirius';
// 	return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
// };

// console.log(callMyNightSky());
// console.log(stars);


// Practice Good Scoping ============

// const logSkyColor = () => {
//     const dusk = true;
//     let color = 'blue'; 
//     if (dusk) {
//       let color = 'pink';
//       console.log(color); // pink
//     }
//     console.log(color); // blue 
//   };
   
//   console.log(color); // ReferenceError

// const logVisibleLightWaves = () => {
//     let lightWaves = 'Moonlight';
//       let region = 'The Arctic';
//     // Add if statement here:
//     if (region === 'The Arctic'){
//       let lightWaves = 'Northern Lights';
//       console.log(lightWaves);
//     }
    
//     console.log(lightWaves);
//   };
  
//   logVisibleLightWaves();


// Create an Array ======

// let newYearsResolutions = ['Keep a journal', 'Take a falconry class', 'Learn to juggle'];

// const hobbies = ['kayaking', 'snowboarding', 'napping'];
// console.log(hobbies);


// Accessing Elements =======

// const hello = 'Hello World';
// console.log(hello[6]);
// // Output: W

// individual elements in arrays can also be stored to variables.

// const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];

// const listItem = famousSayings[0];

// console.log(famousSayings[2]);

// console.log(famousSayings[3]);


//Update Elements =====

// let seasons = ['Winter', 'Spring', 'Summer', 'Fall'];
 
// seasons[3] = 'Autumn';
// console.log(seasons); 
// //Output: ['Winter', 'Spring', 'Summer', 'Autumn']

// In the example above, 
// the seasons array contained the names of the four seasons.
// However, we decided that we preferred to say 'Autumn' instead of 'Fall'.
// The line, seasons[3] = 'Autumn'; 
// tells our program to change the item at index 3 of the seasons array 
// to be 'Autumn' instead of what is already there.

// let groceryList = ['bread', 'tomatoes', 'milk'];

// groceryList[1]  = 'avocados';

// Arrays with let and const ======

// let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

// const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

// condiments[0] = 'Mayo';

// console.log(condiments);

// condiments = ['Mayo'];

// console.log(condiments);

// utensils[3] = 'Spoon';

// console.log(utensils);


// The .length property =======

// const newYearsResolutions = ['Keep a journal', 'Take a falconry class'];
 
// console.log(newYearsResolutions.length);
// // Output: 2

// const objectives = ['Learn a new language', 'Read 52 books', 'Run a marathon'];

// console.log(objectives.length);

// The .push() Method ========

// const itemTracker = ['item 0', 'item 1', 'item 2'];
 
// itemTracker.push('item 3', 'item 4');
 
// console.log(itemTracker); 
// // Output: ['item 0', 'item 1', 'item 2', 'item 3', 'item 4'];

// const chores = ['wash dishes', 'do laundry', 'take out trash'];

// chores.push('cook dinner', 'mop floor');

// console.log(chores);


//The .pop() Method ========

    // const newItemTracker = ['item 0', 'item 1', 'item 2'];
    
    // const removed = newItemTracker.pop();
    
    // console.log(newItemTracker); 
    // // Output: [ 'item 0', 'item 1' ]
    // console.log(removed);
    // // Output: item 2

    // const chores = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];

    // chores.pop();

    // console.log(chores)


// More Array Methods =========


    // const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

    // groceryList.shift();

    // console.log(groceryList);

    // groceryList.unshift('popcorn');

    // console.log(groceryList);

    // console.log(groceryList.slice(1, 4));

    // console.log(groceryList);

    // const pastaIndex = groceryList.indexOf('pasta');

    // console.log(pastaIndex);


// Arrays and Functions ==========

// const flowers = ['peony', 'daffodil', 'marigold'];
 
// function addFlower(arr) {
//   arr.push('lily');
// }
 
// addFlower(flowers);
 
// console.log(flowers); // Output: ['peony', 'daffodil', 'marigold', 'lily']


    // const concept = ['arrays', 'can', 'be', 'mutated'];

    // function changeArr(arr){
    //   arr[3] = 'MUTATED';
    // }

    // changeArr(concept);

    // console.log(concept);

    // const removeElement = newArr => {
    //   newArr.pop()
    // }

    // removeElement(concept);

    // console.log(concept);


    
// Nested Arrays ======

// const nestedArr = [[1], [2, 3]];
 
// console.log(nestedArr[1]); // Output: [2, 3]

// const nestedArr = [[1], [2, 3]];
 
// console.log(nestedArr[1]); // Output: [2, 3]
// console.log(nestedArr[1][0]); // Output: 2

// const numberClusters = [[1, 2], [3, 4], [5, 6]];

// const target = numberClusters[2][1];


// Repeating Tasks Manually ====

// const vacationSpots = ['Mozambique', 'Thailand', 'Bolivia'];

// console.log(vacationSpots[0]);
// console.log(vacationSpots[1]);
// console.log(vacationSpots[2]);


// The For Loop
// menyederhanakan array yang banyak

// for (let counter = 0; counter < 4; counter++) {
//     console.log(counter);
//   }

//   for (let counter = 5; counter < 11; counter++) {
//     console.log(counter);
//   }

  
// Looping in Reverse

// for (let counter = 0; counter < 4; counter++){
//     console.log(counter);
//   }

// balikanlah menjadi hitungan terbalik, dari 3,2,1,0
// yang diatas dari bawah keatas

// for (let counter = 3; counter >= 0; counter--){
//     console.log(counter);
//   }
  
  
// Looping through Arrays =========

// const animals = ['Grizzly Bear', 'Sloth', 'Sea Lion'];
// for (let i = 0; i < animals.length; i++){
//   console.log(animals[i]);
// }

// Remember that arrays are zero-indexed, 
// the index of the last element of an array is equivalent to the length of that array minus 1.
// If we tried to access an element at the index of animals.
// length we will have gone too far!

// With for loops, it’s easier for us to work with elements in arrays.

    // const vacationSpots = ['Bali', 'Paris', 'Tulum'];

    // // Write your code below
    // for (let i = 0; i < vacationSpots.length; i++ ){
    //   console.log('I would love to visit ' + vacationSpots[i]);
    // }


    
// Nested Loops =====

    // const myArray = [6, 19, 20];
    // const yourArray = [19, 81, 2];
    // for (let i = 0; i < myArray.length; i++) {
    //   for (let j = 0; j < yourArray.length; j++) {
    //     if (myArray[i] === yourArray[j]) {
    //       console.log('Both arrays have the number: ' + yourArray[j]);
    //     }
    //   }
    // }

// // Write your code below
// let bobsFollowers = ['Joe', 'Marta', 'Sam', 'Erin'];
// let tinasFollowers = ['Sam', 'Marta', 'Elle'];
// let mutualFollowers = [];

// for (let i = 0; i < bobsFollowers.length; i++) {
//   for (let j = 0; j < tinasFollowers.length; j++) {
//     if (bobsFollowers[i] === tinasFollowers[j]) {
//       mutualFollowers.push(bobsFollowers[i]);
//     }
//   }
// };

// The While Loop =====

// A for loop that prints 1, 2, and 3
    // for (let counterOne = 1; counterOne < 4; counterOne++){
    //     console.log(counterOne);
    //   }
    
    //   // A while loop that prints 1, 2, and 3
    //   let counterTwo = 1;
    //   while (counterTwo < 4) {
    //     console.log(counterTwo);
    //     counterTwo++;
    //   }
   
// const cards = ['diamond', 'spade', 'heart', 'club'];

// // Write your code below
// let currentCard;

// while ( currentCard != 'spade') {
//   currentCard = cards[Math.floor(Math.random() * 4)];
// 	console.log(currentCard);
// }

// Do...While Statements =====


    // let countString = '';
    // let i = 0;
    
    // do {
    //   countString = countString + i;
    //   i++;
    // } while (i < 5);
    
    // console.log(countString);

// const firstMessage = 'I will print!';
// const secondMessage = 'I will not print!'; 
 
// A do while with a stopping condition that evaluates to false
// do {
//  console.log(firstMessage)
// } while (true === false);
 
// // A while loop with a stopping condition that evaluates to false
// while (true === false){
//   console.log(secondMessage)
// };

// we want to add at least one cup of sugar to the batter 
// even if the value of cupsOfSugarNeeded is 0

    // let cupsOfSugarNeeded = 3;
    // let cupsAdded = 0;

    // do {
    //  cupsAdded++
    //  console.log(cupsAdded + ' cup was added') 
    // } while (cupsAdded < cupsOfSugarNeeded);


// The break Keyword =================================
// untuk stop looping
// for (let i = 0; i < 99; i++) {
//     if (i > 2 ) {
//        break;
//     }
//     console.log('Banana.');
//   }
   
//   console.log('Orange you glad I broke out the loop!');

    // const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

    // // Write your code below
    // for (let i = 0; i < rapperArray.length; i++){
    //   console.log(rapperArray[i]);
    //   if (rapperArray[i] === 'Notorious B.I.G.'){
    //     break;
    //   }
    // }

    // console.log("And if you don't know, now you know.");


// Functions as Data =======
// apabila lupa dengan perintah atau command
// maka bisa dipaka (.name)



    // const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
    //     for(let i = 1; i <= 1000000; i++) {
    //       if ( (2 + 2) != 4) {
    //         console.log('Something has gone very wrong :( ');
    //       }
    //     }
    //   };
    
         //   short dari perintah diatas.

    //   const isTwoPlusTwo = checkThatTwoPlusTwoEqualsFourAMillionTimes
    
    //   isTwoPlusTwo();

        // panggila variable check diatas.
    //   console.log(isTwoPlusTwo.name)


// Functions as Parameters ========

    // const higherOrderFunc = param => {
    //     param();
    //     return `I just invoked ${param.name} as a callback function!`
    //   }
    
    //   const anotherFunc = () => {
    //     return 'I\'m being invoked by the higher-order function!';
    //   }
    
    //   higherOrderFunc(anotherFunc);

    // higherOrderFunc(() => {
    //   for (let i = 0; i <= 10; i++){
    // //     console.log(i);
    // //   }
    // });

// A higher-order function is a function that either accepts functions as parameters, 
// returns a function, or both!

const addTwo = num => {
    return num + 4;
  }
  
  const checkConsistentOutput = (func, val) => {
    let checkA = val + 4;
    let checkB = func(val);
    return checkA === checkB ? func(val) : 'inconsistent results';  
  }
  
  console.log(checkConsistentOutput(addTwo, 10));







  


