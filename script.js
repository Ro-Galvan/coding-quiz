
var contentEl = document.querySelector('.content');
var questionsMenuEl = document.querySelector('#questions-menu');
var endMenuEl = document.querySelector('#end-menu');

var startButton = document.querySelector('#start-button');
var initials = document.querySelector('#initials');

var cursor = 0;

var questions = {
  choices: [
    "strings",
    "booleans",
    "alerts",
    "numbers",
  ],
  correct: 2
};

function startScreen() {
  contentEl.style.display = "block";
  questionsMenuEl.style.display = "none";
  endMenuEl.style.display = "none";
}

function gameScreen() {
  contentEl.style.display = "none";
  questionsMenuEl.style.display = "block";
  endMenuEl.style.display = "none";

  for (var i = 0; i < questions.choices.length; i++) {
    var item = questions.choices[i];
    var answerBtn = document.createElement('button');
    answerBtn.textContent = i + 1 + ". " + item;
    questionsMenuEl.appendChild(answerBtn);
  }
}

function endScreen() {
  contentEl.style.display = "none";
  questionsMenuEl.style.display = "none";
  endMenuEl.style.display = "block";
}

function init() {
  startScreen();
}

startButton.addEventListener('click', gameScreen);
questionsMenuEl.addEventListener('click', endScreen);

init();


// var questions = {
// { 
//     jsQuestion: "Where do you place the script tag for external js files?",
//     choices: ['in head of the html file', 'it links itself, 'after the opening body tag in the html file', 'before the closing body tag in the html file' 
// ],
//     answer: '3'
// },
// }
//    console.log(does it work?);
// var questions = [
//     {
//         title: "Commonly used data types DO NOT include:",
//         choices: ["strings", "booleans", "alerts", "numbers"],
//         answer: "alerts"
//     },

function startGame (){
// setInterval(function()  {
// console.log('hello')    
// }, 1000);
};

var counter = 5
var myTimer = setInterval(function()  {

    if (counter <= 0) clearInterval(myTimer) 
    console.log(counter--)    
    }, 1000);



/*start button----done but need to --google javascript replace variable on page
start timer
    remove inital elements from page 
    display 1st question
        display the 4 choices 
        handle the answer based on choice clicked
        if wrong, penalize score time by ten seconds
        else correct, move on to next question
        after last question stop the timer
 at the end save/submit initials ---form input
clear score/go back---- 
// give option to view past scores --- local storage*/