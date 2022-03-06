var contentEl = document.querySelector('.content');
var questionsEl = document.querySelector('#questions');
var endMenuEl = document.querySelector('#end-menu');
var startButton = document.querySelector('#start-button');
var formInitials = document.querySelector('#initials');
console.log(startButton);
var currentQNum = 0;

var questions = [
{
q: "Where do you place the script tag for external js files?",
  a: ['in the head of the html file', 
    'it links itself',
    'after the opening body tag in the html file', 
    'before the closing body tag in the html file'],
  correct: 3
},

{
  q: "Which of the following is NOT a primitive type?",
    a: ['object', 
      'null',
      'string', 
      'number'],
    correct: 0
  },

  {
    q: "Which symbol is used for a simple assignment operator?",
      a: ['\@', 
        '\=',
        '\^', 
        '\~'],
      correct: 1
    },

    {
      q: "What does DOM stand for?",
        a: ['Document of Model', 
          'Domain Object Machine',
          'Document Object Model', 
          'Developer of Machines'],
        correct: 2
      },

      {
        q: "A function does not work until you do what?",
          a: ['call/invoke it', 
            'used DOM',
            'link it to css', 
            'none of the above'],
          correct: 0
        },
];

//instructor provided to help
function startScreen() {
  contentEl.style.display = "block";
  questionsEl.style.display = "none";
  endMenuEl.style.display = "none";
}
console.log('does this work-startscreen??');
function gameScreen() {
  // contentEl.style.display = "none";
  questionsEl.style.display = "block";
  endMenuEl.style.display = "none";
  displayQuestion();
}
console.log('does this work-gamescreen??');

function displayQuestion() {
  questionsEl.innerHTML = '';
  //takes question array and grabs element that is position [0]
    var questionSelected = questions[currentQNum]; 
    var div = document.createElement('div'); 
     div.textContent = questionSelected.q
    questionsEl.appendChild(div);
    
    // for loop used to create 1 button for answer  
  for (var i = 0; i < questionSelected.a.length; i++) {
    var item = questionSelected.a[i];
    var btn = document.createElement('button');
    btn.textContent = i + 1 + ". " + item;
    // btn.value = item;
    questionsEl.appendChild(btn);
  }
  console.log('does this work-display question??');
}

function endScreen() {
  contentEl.style.display = "none";
  questionsEl.style.display = "none";
  endMenuEl.style.display = "block";
}
//submit initials ---form input
function forminput() {
    var formInitials = document.querySelector('#initials');

    // will remove initials after submit is clicked
    formInitials.innerhtml = ""; 
}


function init() {
  startScreen();
}

startButton.addEventListener('click', gameScreen);
 
// displays next question
questionsEl.addEventListener('click', function (event) {
  if (event.target.matches('button')) {
    var userGuess = Array.prototype.indexOf.call(questionsEl, event.target);
    console.log(userGuess);
    currentQNum++;
    if (currentQNum < questions.length) {
      displayQuestion();
    } else {
      endScreen();
    }
  }
});

init();

function startGame(){
setInterval(function()  {
console.log('hello')    
}, 1000);
};

var counter = 5
var myTimer = setInterval(function()  {

    if (counter <= 0) clearInterval(myTimer) 
    console.log(counter--)    
    }, 1000);
