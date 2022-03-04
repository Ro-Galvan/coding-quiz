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
  correct: 4
},

{
  q: "Where do you place the script tag for external js files?",
    a: ['in the head of the html file', 
      'it links itself',
      'after the opening body tag in the html file', 
      'before the closing body tag in the html file'],
    correct: 2
  },

  {
    q: "Where do you place the script tag for external js files?",
      a: ['in the head of the html file', 
        'it links itself',
        'after the opening body tag in the html file', 
        'before the closing body tag in the html file'],
      correct: 1
    },

    {
      q: "Where do you place the script tag for external js files?",
        a: ['in the head of the html file', 
          'it links itself',
          'after the opening body tag in the html file', 
          'before the closing body tag in the html file'],
        correct: 3
      },

      {
        q: "Where do you place the script tag for external js files?",
          a: ['in the head of the html file', 
            'it links itself',
            'after the opening body tag in the html file', 
            'before the closing body tag in the html file'],
          correct: 2
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
    var questionSelected = questions[currentQNum]; //take ? array and grab element that is position [0]
    var div = document.createElement('div'); //this needs to be a tag 
     div.textContent = questionSelected.q
    questionsEl.appendChild(div);
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
//Removed endscreen with function (event)
questionsEl.addEventListener('click', function (event) {
  if (event.target.matches('btn')) {
    console.log(event.target);
    cursor++;
    if (cursor < questions.length) {
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

/*start button----done but need to --google javascript replace variable on page
start timer
    remove inital elements from page 
    display 1st question
        display the 4 choices 
        handle the answer based on choice clicked
        if wrong, penalize score time by ten seconds
        else correct, move on to next question
        after last question stop the timer
 
clear score/go back---- 
// give option to view past scores --- local storage*/