//Starter values
let display = document.getElementById("display");
let A_button = document.getElementById("A")
let B_button = document.getElementById("B")
let C_button = document.getElementById("C")
let D_button = document.getElementById("D")
let A_text = document.getElementById("A_text");
let B_text = document.getElementById("B_text");
let C_text = document.getElementById("C_text");
let D_text = document.getElementById("D_text");
var intervalId;
//question object array
var questions =[
    {ID:1,
    questionText:"What is the average weight of a Canvasback duck?",
    answers: ["1.5 lbs","3.2 lbs","1000 lbs", "2.7 lbs"],
    correct: "D"},
    {ID:2,
    questionText:"Who is the lead singer of the Smashing Pumpkins?",
    answers: ["James Iha","Hannah Montana","Billy Corgan","Mick Jagger"],
    correct: "C"},
    {ID:3,
    questionText:"Why are you getting out of your seat?",
    answers: ["To get tea","TO JUMP AROUND!","Strech break","To get Red Bull"],
    correct: "B"},
    {ID:4,
    questionText:"What does the Fox say?",
    answers: ["Moo","Meow","Quack","TETETETTEETE!"],
    correct: "D"},
    {ID:5,
    questionText:"Who is not a playa?",
    answers: ["Notorious B.I.G.","P-Diddy","Marky Mark","Dr.Dre"],
    correct: "A"},
];
//starter game values
var win = 0
var loss = 0
var v = 0
//Runs if the user picks the right answer.  pauses the game for 3 
//seconds before advancing to the next question.
function rightAnswer(){
    console.log("right answer runs")
    display.innerHTML = "You got it right!"
    v++
    setTimeout(function(){
        if(v >= questions.length){
            stop()
            gameOver()
        }
        else{
            setUp()
            countDown()};},3000);
}
//Runs if the user picks the wrong answer.  pauses the game for 3 
//seconds before advancing to the next question.
function wrongAnswer(){
    console.log("wrong answer runs")
    display.innerHTML = "Crud wrong answer!"
    v++
    setTimeout(function(){
        if(v >= questions.length){
            stop()
            gameOver()
        }
        else{
            setUp()
            countDown()};},3000);
}
//outer function to be called once and at game repeats
function outOftime(){
    if (v < questions.length){
    console.log("Out of time")
    display.innerHTML = "You ran out of time!"
    v++
    loss++
    setTimeout(function(){
        if(v >= questions.length){
            stop()
            gameOver()
        }
        else{
            setUp()
            countDown()};},3000);
        }
    };
    // Runs after the game is over, via if v = the number of questions
function gameOver(){
    $('#timer').text("");
    $('#display').text("Thats the end of the game!");
    $('#display').append('<h2 id="wins"></h2>');
    $('#display').append('<h2 id="losses"></h2>');
    $('#wins').text("Questions correct: "+ win)
    $('#losses').text("Questions incorrect: "+ loss)
    $('#button_div').empty();
    $('.card-header').text('');
    $('#button_div').append('<button id="playAgain">Play Again?!</button>');
    //clicking this button will reset the html for the answer buttons
    $('#playAgain').click(function(){
        $('#button_div').empty();
        var buttonA = $('<button>').attr({'class':'btn btn-dark btn-lg normal-button', 'id':'A'})
        var buttonB = $('<button>').attr({'class':'btn btn-dark btn-lg normal-button', 'id':'B'})
        var buttonC = $('<button>').attr({'class':'btn btn-dark btn-lg normal-button', 'id':'C'})
        var buttonD = $('<button>').attr({'class':'btn btn-dark btn-lg normal-button', 'id':'D'})
        $('#button_div').append(buttonA,buttonB,buttonC,buttonD);
        outerGame();
        });
       game()
       }
       //set up of each question, advancing the question and answers using v as a counter
function setUp(){
    console.log("v on " + v);
    console.log("wins on " + win)
    console.log("losses on " + loss)
    console.log(questions[v].questionText)
    display.innerHTML =questions[v].questionText
    A.innerHTML=questions[v].answers[0]
    B.innerHTML=questions[v].answers[1]
    C.innerHTML=questions[v].answers[2]
    D.innerHTML=questions[v].answers[3]

}
//countdown is the question timer. if it reaches 0 the question will be wrong
function countDown(){
    if(v < questions.length){
    timeLeft = 10;
    intervalId = setInterval(finalCountdown, 1000);
    clockRunning = true;
    function finalCountdown(){
        if (timeLeft == -1){
            clearInterval(intervalId);
            outOftime()
        }
        else{
            document.getElementById('timer').innerHTML = "time: "+ timeLeft
            timeLeft--;
        }
    }
}
};
// stops the countdown set interval
function stop() {
    clearInterval(intervalId);
    clockRunning = false;
  }
function outerGame(){
    v = 0;
    win = 0;
    loss = 0;
    timeLeft = 5;
    setUp();
    
    game();
}
// inner game
function game(){
    //starts count down
    countDown();
    console.log("prebutton v value: "+v);
    //listens for which answer is choosen
    $('.normal-button').unbind().click(function(){
    stop()
    var t = $(this).attr('id');
    console.log("value of t: "+ t)
    console.log("value of v after click: "+ v)
    //if user clicks the right answer
    if(questions[v].correct === t){
        rightAnswer();
        win++
        console.log("right answer, wins: "+ win);
        }
        // if wrong answer
    else {
        wrongAnswer();
        loss++
        console.log("wrong answer loses: "+ loss);
    }
   
});
};

outerGame()