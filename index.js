
// Number1-Exercise1

// let existsUserLogin="Humay"
// let existsUserPassword="12345"

// let userLogin=prompt("Enter login")
// let userPassword=prompt("Enter password")
// let UserLogin =userLogin.trim()
// let UserPassword=userPassword.trim()

// if (UserLogin===existsUserLogin & UserPassword===existsUserPassword){
//     alert(`Welcome ${UserLogin}`)
   
// }
// else {
    
// alert("Login and (or) Password entered incorrectly!")
// }







// Number1-exercise2

// for (let i = 0; i<3; i += 1) {
//     let newStudent = prompt("Enter the name of the new student!");
//     newStudent = newStudent.trim();
//     if(newStudent) {
//     alert(`Welcome ${newStudent}!`)
//     }
//     }


// i=0
// while(i<3){
// i++;
// let newStudent = prompt("Enter the name of the new student!");
// newStudent = newStudent.trim();
// if(newStudent) {
//         alert(`Welcome ${newStudent}!`)
//         }

// }


// let i=0;
// do{
//     let newStudent = prompt("Enter the name of the new student!");
// newStudent = newStudent.trim();
// i++}
// while(i<3)





// Number1-exercise3

// let sum=0;
// for(i=0; i<=100; i++){
//     sum=sum+i;
  
// }
// console.log(sum);




// Number1-exercise4

// let firstAnswer=4;
// let secondAnswer=4;
// let thirdAnswer=1;
// let fourthAnswer= 12;
// let fifthAnswer=6;

// let correctAnswers=[];
// let incorrectAnswers=[];

// let firstQuestion=prompt("What`s 2+2");
// if(firstQuestion==firstAnswer ){
//     alert("Correct answer!")
//     correctAnswers.push(firstQuestion)
// }
// else{ alert("Incorrect answer")
// incorrectAnswers.push(firstQuestion)

// }

// let secondQuestion=prompt("How much will 2*2 be?");

// if(secondQuestion==secondAnswer ){
//     alert("Correct answer!")
//     correctAnswers.push(secondQuestion)
// }
// else{ alert("Incorrect answer")
// incorrectAnswers.push(secondQuestion)
// }
// let thirdQuestion=prompt("Petya had 5 apples. He ate 3 of them and gave 1 to a friend. How many apples does Peter have left?");

// if(thirdQuestion==thirdAnswer ){
//     alert("Correct answer!")
//     correctAnswers.push(thirdQuestion)
// }
// else{ alert("Incorrect answer")
// incorrectAnswers.push(thirdQuestion)
// }
// let fourthQuestion=prompt("Masha had 10 sweets. She ate 2 and gave 1 to a friend. After that, mom gave Masha 5 more sweets.How many sweets did Masha have left in the end?");
// if(fourthQuestion==fourthAnswer ){
//     alert("Correct answer!")
//     correctAnswers.push(fourthQuestion)
// }
// else{ alert("Incorrect answer")
// incorrectAnswers.push(fourthQuestion)
// }
// let fifthQuestion=prompt("What`s 2+2*2 ?");
// if(fifthQuestion==fifthAnswer ){
//     alert("Correct answer!")
//     correctAnswers.push(fifthQuestion)
// }
// else{ alert("Incorrect answer")
// incorrectAnswers.push(fifthQuestion)
// }

// alert(` End of the test! Correct answers :${correctAnswers.length}, incorrect: ${incorrectAnswers.length}`);





// Number1-exercise5
// let clientName="Igor";
// let clientSpentForAllTime=110;
// let clientSpentToday=25;
//  clientSpentForAllTime= (clientSpentToday) + (clientSpentForAllTime);
//  alert(`Thank you, ${clientName} Payable ${clientSpentToday}$. For all the time in our restaurant you
//  spent ${clientSpentForAllTime}$.`)


// discount=0;

//  if(clientSpentForAllTime>100 & clientSpentForAllTime<300){
//     discount=10
//     alert(`You are given a discount in ${discount}%`)
  
//  }
//  else if(clientSpentForAllTime>300 & clientSpentForAllTime<500){
//   discount=20
//   alert(`You are given a discount in ${discount}%`)

//  }
//  else if( clientSpentForAllTime>500){
//    discount=30
//    alert(`You are given a discount in ${discount}%`)
//  }




 //Number1- exercise-6
//  let clientName = prompt("Enter the client's name");
//  let clientSpentToday =(prompt("How much did the client spend today?"));
//  let clientSpentForAllTime =(prompt("How much did the client spend all time?"));
 
//  if (isNaN(clientSpentToday) || isNaN(clientSpentForAllTime)) {
//    alert("The amount that the client spent all time and spent today must be a number! Please reload the page to try again.");
//  } else {
//    clientSpentForAllTime += clientSpentToday; 
   
//    let discount;
   
//    if (clientSpentForAllTime >= 100 && clientSpentForAllTime < 300) {
//      discount = 10;
//    } else if (clientSpentForAllTime >= 300 && clientSpentForAllTime < 500) {
//      discount = 20;
//    } else if (clientSpentForAllTime >= 500) {
//      discount = 30;
//    } else {
//      discount = 0;
//    }
   
//    let payableAmount = clientSpentToday * (1 - discount / 100);
   
//    alert(`You are given a discount in ${discount}%!\nThank you, ${clientName}! Payable ${payableAmount}$. For all the time in our restaurant you spent ${clientSpentForAllTime}$.`);
//  }



// Functions-Exercise 1

// function declaration
// function checkName(name) {
//     return "Name:" + name;
//   }
//   console.log(checkName("Humay"));

  //function expression
//   let checkName=function(name){
//     return "Name:"+name
//   }
//   console.log(checkName("Humay"));

//arrow function
// const checkName = (name) => {
//     return `Name: ${name}`;
//   }
//   console.log(checkName("Humay"));





// Functions-Exercise 2
// function getSumOfNumbers(number, type = "odd") {
//     let sum = 0;
//     for (let i = 0; i <= number; i++) {
//       if (type === "odd" && i % 2 !== 0) {
//         sum += i;
//       } else if (type === "even" && i % 2 === 0) {
//         sum += i;
//       } else if (type === "") {
//         sum += i;
//       }
//     }
//     return sum;
//   }
// console.log(getSumOfNumbers(10,"even"));  
// console.log(getSumOfNumbers(10,"odd"));  
// console.log(getSumOfNumbers(10,""));  


//Function-Exercise 3
// function getDivisors(number = 1) {
//     if (number < 1 || !Number.isInteger(number)) {
//       alert("number must be an integer and greater than zero!");
//       return 0;
//     }
    
//     let divisors = 0;
    
//     for (let i = 1; i <= number; i++) {
//       if (number % i === 0) {
//         divisors++;
//       }
//     }
    
//     return divisors;
//   }
// console.log(getDivisors(4));  
// console.log(getDivisors(5));
// console.log(getDivisors(12));
// console.log(getDivisors(30));



//Function Exercise-4

// function checkQuestionAnswer(question, correctAnswer) {
//     let userAnswer = prompt(question);
  
//     if (userAnswer == correctAnswer || userAnswer==correctAnswer.trim().toLowerCase()) {
//       alert("The answer is correct");
//     } 
//      else {
//       alert("The answer is incorrect");
//     }
//   }
  
// console.log(checkQuestionAnswer('Is the watermelon a fruit or a berry?','A berry'))







//Array task-1

// function getSumOfSequence(number) {
//     const sequence = [];
  
//     for (let i = 1; i <= number; i++) {
//       sequence.push(i);
//     }
  
//     const sum = sequence[0] + sequence[sequence.length - 1];
//     return sum;
//   }
//   console.log(getSumOfSequence(5))  



//Array task-2
// let peopleWaiting = ['Kristina', 'Oleg', 'Kirill', 'Maria', 'Svetlana', 'Artem', 'Gleb'];

// function giveParcel() {
//   const name = peopleWaiting.shift();
  
//   if (name === "Kirill") {
//     alert(`${name} received the package. There are ${peopleWaiting.length} people left in the queue.`);
//   } else if (name) {
//     console.log(`${name} received the package. There are ${peopleWaiting.length} people left in the queue.`);
//   }
// }

// function leaveQueueWithoutParcel() {
//   const name = peopleWaiting.pop();
  
//   if (name) {
//     alert(`${name} did not receive the package and left the queue.`);
//   }
// }

// giveParcel();
// giveParcel();
// giveParcel();
// leaveQueueWithoutParcel();
// leaveQueueWithoutParcel();
// leaveQueueWithoutParcel();
// leaveQueueWithoutParcel();




//Array task 3
//1.for
// const numbers = [10, 4, 100, -5, 54, 2];
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i]**3;
// }
// console.log(sum)

//2.for of
// const numbers = [10, 4, 100, -5, 54, 2];
// let sum = 0;

// for (const num of numbers) {
//   sum += num**3;
// }
// console.log(sum)


//3.for each
// const numbers = [10, 4, 100, -5, 54, 2];
// let sum = 0;
// numbers.forEach(num => {
//   sum += num**3;
// });
// console.log(sum); 

//4.Reduce
// const numbers = [10, 4, 100, -5, 54, 2];
// const sum = numbers.reduce((acc, num) => {
//   return acc + num**3;
// }, 0);

// console.log(sum);




//Array task 4
// const coffees = ['Latte', 'Cappuccino', 'Americano'];
// const coffeeName = prompt('Search coffee by name:');
// const index = coffees.findIndex(coffee => coffee.toLowerCase() === coffeeName.toLowerCase());
// if (index !== -1) {
//   const coffee = coffees[index];
//   const popularity = index + 1;
//   alert(`Keep your favorite coffee ${coffee}. It is the ${popularity}-th most popular in our coffee shop.`);
// } else {
//   alert('Unfortunately, this type of coffee is not available.');
// }


//Array task 5
// const coffees = ['Latte', 'Cappuccino', 'Americano'];
// const prices = [1.5, 1, 2];
// const newPrices = prices.map(price => price + 0.5);
// coffees.forEach((coffee, index) => {
//   const price = newPrices[index];
//   alert(`${coffee} is now worth ${price} euro`);
// });



//Array task 6
// const clientsEstimations = [];

// function askClientToGiveEstimation() {
//   const estimation = Number(prompt("How do you rate our coffee shop from 1 to 10?"));
//   if (!isNaN(estimation) && estimation >= 1 && estimation <= 10) {
//     clientsEstimations.push(estimation);
//   }
// }

// for (let i = 0; i < 5; i++) {
//   askClientToGiveEstimation();
// }
// const goodEstimations = clientsEstimations.filter(estimation => estimation > 5).length;
// const notGoodEstimations = clientsEstimations.filter(estimation => estimation <= 5).length;

// alert(`Total positive estimates: ${goodEstimations}; Total negative ratings: ${notGoodEstimations}`);



//Array task 7
// const goals = [8, 1, 1, 3, 2, -1, 5];

// // Most scoring game in terms of goals
// const maxGoals = Math.max(...goals.filter(goal => goal >= 0));
// const maxIndex = goals.findIndex(goal => goal === maxGoals);
// alert(`The most scoring match was at number ${maxIndex+1}. There were ${maxGoals} goals scored in it.`);

// // Worst games ever
// const minGoals = Math.min(...goals.filter(goal => goal >= 0));
// const minIndexes = goals.reduce((acc, goal, index) => {
//   if (goal === minGoals) acc.push(index+1);
//   return acc;
// }, []);
// alert(`The most unsuccessful matches were under the numbers ${minIndexes.join(', ')}. In each of them, ${minGoals} ball(s) were scored.`);

// // Total number of goals for the season
// const totalGoals = goals.filter(goal => goal >= 0).reduce((acc, goal) => acc + goal, 0);
// alert(`The total number of goals for the season is equal to ${totalGoals}`);

// // Were there automatic defeats
// const autoDefeats = goals.some(goal => goal < 0);
// alert(`There were automatic defeats: ${autoDefeats ? 'yes' : 'no'}`);

// // Average number of goals per match
// const avgGoals = totalGoals / goals.filter(goal => goal >= 0).length;
// alert(`The average number of goals per match is equal to ${avgGoals}`);

// // Sorted goals array
// const sortedGoals = goals.slice().sort((a, b) => a - b);
// alert(`Sorted goals array: ${sortedGoals.join(', ')}`);




