// quiz code


//event handlers for index

//timer starter
let timerstart = document.getElementById('timerStart')
timerstart.addEventListener('click',trigger)



//highscore tabler event handler
let highscore = document.getElementById('hscore')
highscore.addEventListener('click',trigger2)


//functions for setting off start button and timer
function trigger(event){
    console.log('trigger')
    startTimer()
}

//hall of fame access trigger
function trigger2(event){
   playerScore() 
}

// timer and score variables
 let timer;
let timeRemaining = 0;
let currentQuestion = -1;
let score = 0;

// start button starts countdown
function startTimer() {

    timeRemaining = 100;
    document.getElementById("timeRemaining").innerHTML = timeRemaining;

    timer = setInterval(function() {
        timeRemaining--;
        document.getElementById("timeRemaining").innerHTML = timeRemaining;

        if (timeRemaining <= 0) {
            clearInterval(timer);
            gameOver();
        }
    }, 1000);

    nextQuestion();
}


function gameOver() {
}


function setScore() {
    
}

function playerScore() {
   
}

function clearScore() {
    
}

function newGame() {
    
}

function incorrect() {
  
}


function correct() {
  

    nextQuestion();
}

 
function nextQuestion() {
   
  
}