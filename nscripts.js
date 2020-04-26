const start = document.getElementById('start');
const questions = document.getElementById('questions');
const final = document.getElementById('final');
const hiscore = document.getElementById('hi-score');

const eachQuestion = document.getElementById('question')
const answer = document.getElementById('answers')
const finalscore = document.getElementById('score')


let score = 0;
let currentQindex = 0;
let correcto

const startButton = document.getElementById('start-button')

function startquiz(){
    //console.log('game has started')
    start.classList.add('d-none')
    questions.classList.remove('d-none')
    question()
    
    
}


function question(){
    //console.log('quizquestions')
    questionreset()
    nextquestion(quizquestions[currentQindex])
}



function nextquestion(question){
    //console.log(nextquestion)
    
    
    
    
    correcto = question.answer
    eachQuestion.innerText=question.title
    question.option.forEach((choice) => {
    
    const button = document.createElement('button')
    button.innerText = choice.text
    button.setAttribute("class", "btn btn-warning") 
    answer.appendChild(button)

    button.addEventListener('click',selectedAnswer)
    

    })

    

}

function selectedAnswer (event){
    const selectedanswer = event.target
    const answer = selectedanswer.innerText
    if (correcto == answer){
        correct()
    }else{
        incorrect()
    }
    
    
    

}

function iterator(){
    let cutoff = quizquestions.length - 1;
    if (currentQindex === cutoff){gameOver()}
    currentQindex++
    question()
}

function questionreset () {
    while (answer.firstChild){
        answer.removeChild(answer.firstChild)
    }
}

function startTimer() {

    timeRemaining = 100;
    //passes time as unit to initialized variable
    document.getElementById("timeRemaining").innerHTML = timeRemaining;
    //time remaining passed to 'timeRemaining id on the HTML page

    timer = setInterval(function() {
        timeRemaining--;
        //decreases time remaining by one unit
        document.getElementById("timeRemaining").innerHTML = timeRemaining;
        //new time written to the timeRemaining iD tag

        if (timeRemaining <= 0) {
            
            gameOver();
        } //if time remaining is equal or less to zero.  Timer is stopped/cleared, and 'Game over' function is invoked.
    }, 1000);

    //nextQuestion();
    //the next question function is invoked.

}



function gameOver(){
    clearInterval(timer);
    
    finalscore.textContent=" "+score
    questions.classList.add('d-none')
    final.classList.remove('d-none')
    
}

function correct(){
    var audioElement = document.createElement("audio");
        audioElement.setAttribute("src", "correct-sound.wav");
        audioElement.play();
        score = score + 10;
        console.log(score)


}

function incorrect(){
    timeRemaining = timeRemaining - 20;
    var audioElement = document.createElement("audio");
    audioElement.setAttribute("src", "incorrect-sound.wav");
    audioElement.play();


}







  startButton.addEventListener('click',startquiz)
  startButton.addEventListener('click',startTimer)
  answer.addEventListener('click',iterator)



  
  



const quizquestions = [
	{
    title: "What does 0.2 + 0.1 evaluate to in JavaScript?.",
    option: [
       { text: "False"},
       { text: "True"},
       { text: "0.3"}, 
       { text: "NaN"},
    ],
    answer: "False",
    },
    
    {
        title: "Which of these is a primitive",
        option: [
           { text: "Symbol"},
           { text: "Array"},
           { text: "Object"}, 
           { text: "Map"},
        ],
        answer: "Symbol",
        },

    {
        title: "forEach(), Map() and Filter are examples of",
        option: [
           { text: "Imperative functions"},
           { text: "Higher-order functions"},
           { text: "Loops"},
           { text: "Garbage collection"}

          ],
          answer: "Higher-order functions"
    
    },
    {
        title: "What variable cannot be changed once declared",
        option: [
            { text: "Var"},
            { text: "Let"},
            { text: "Const"},
            { text: "ECMA"}

        ],
        answer: "Const"







    },
    {
        title: "What is used to invoke a function",
        option: [
            { text: "()"},
            { text: "{}"},
            { text: "++"},
            { text: "**"}
        ],

        answer: "()"




    }

];







