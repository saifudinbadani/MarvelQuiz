// console.log("Saifudin Badani");
const chalk = require('chalk');


var readlineSync = require("readline-sync");
var userName = readlineSync.question(chalk.bgCyan.bold("What is your name? "))

console.log("Welcome " + chalk.italic.bold.bgYellowBright(userName) + " to Marvel Universe Quiz.")

console.log(chalk.bgRedBright('Instructions: Do not use FULLSTOP in your answers!!'));

console.log("*****************************")



var score = 0
var highScore = [
  {
    name: 'Saifudin',
    marks: 9,
  },
  {
    name: 'Hatim',
    marks: 7,
  },
  {
    name: 'Taher',
    marks: 6,
  }
]

function play(question, answer){
  var userInput = readlineSync.question(question);
  if (userInput.toLowerCase() === answer.toLowerCase()){
    console.log(chalk.bgGreenBright("Correct!"));
    score = score + 1;  
  } else {
    console.log(chalk.bgBlueBright("Oops! Wrong one"))
  }
  console.log(chalk.whiteBright(score));
  console.log('----------------------')
}

var questionMajor = [{
  question: chalk.magentaBright.bold("What was the first weapon of Thor? "),
  answer: "Mjolnir"
 }, 
 {
  question: chalk.magentaBright.bold("What is Captain America's shield made of? "),
  answer: "Vibranium"
 },
 {
  question: chalk.magentaBright.bold("What is Clint Barton's superhero name? "),
  answer: "Hawkeye"
 },
 {
  question: chalk.magentaBright.bold("What was Iron Man's last suit called? "),
  answer: "Mark 82"
 },
 {
  question: chalk.magentaBright.bold("Who acted as Star-Lord? "),
  answer: "Chris Pratt"
 },
 {
  question: chalk.magentaBright.bold("Who acted as Iron Man? "),
  answer: "Robert Downey Jr"
 },
 {
  question:chalk.magentaBright.bold("What Infinity Stones was shown in the first Avengers movie? "),
  answer: "Space and Mind"
 },
 {
  question: chalk.magentaBright.bold("What Infinity Stone is in the eye of Aggamotto? "),
  answer: "Time"
 },
 {
  question: chalk.magentaBright.bold("Thor gave Asgard to whom? "),
  answer: "Valkyrie"
 },
]

for (i=0; i < questionMajor.length; i++){
  play(questionMajor[i].question, questionMajor[i].answer)
}

console.log(chalk.keyword('orange')('Your final score is ') + chalk.bold.whiteBright(score))

for (var i=0; i< highScore.length; i++){
  if (score >= highScore[i].marks){
   console.log(chalk.bgYellowBright("Congratulations! ") + chalk.bold.blueBright(userName) + chalk.bgYellowBright(". You have beaten the high score. Send Saifudin a screenshot of the score to get  your name etched in HALL OF FAME."))
   break;
  } else {
   console.log("Good work!");
   console.log('Highest score of 9 was previously achieved by ' + chalk.bold.blueBright(highScore[0].name))
   // break;
  }
 } 


