var readlineSync = require("readline-sync");
var score = 0;
var userName = readlineSync.question("What's your name? ");
console.log("Welcome "+ userName + " to DO YOU KNOW Vivek?");
var highScores = [
  {
    name: "Vivek",
    score: 3,
  },
  {
    name: "Rohan",
    score: 3,
  },
]
function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase() ==   answer.toUpperCase()) { 
    console.log("right!");
    score++;
  } else {
    console.log("wrong!");
  }
  console.log("current score: ", score);
  console.log("-------------")
}
var questions = [{
  question: "Where do I live? ",
  answer: "Aligarh"
}, 
{
  question: "My favorite superhero would be? ",
  answer: "Iron Man"
},
{
  question: "Where do I study? ",
  answer: "IET Lucknow"
}
];
for (var i=0; i<questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}
console.log("YAY! You SCORED: ", score);
console.log("Check out the scores")
for (var i = 0; i < 2; i++) {
  console.log(highScores[i].name + " :- " + highScores[i].score)
}