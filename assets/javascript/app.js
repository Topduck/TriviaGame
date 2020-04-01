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
    answers: ["Moo","Meow","quack","TETETETTEETE!"],
    correct: "D"},
    {ID:5,
    questionText:"Who is known to crush a lot?",
    answers: ["Notorious B.I.G","P-Diddy","Marky Mark","Dr.Dre"],
    correct: "A"},
];
//starter game values
var win = 0
var loss = 0
var v = 0
var timeLeft = 30;
//outer function to be called once and at game repeats
function rightAnswer(){
    console.log("right answer runs")
    display.innerHTML = "You got it right!"
    v++
    setTimeout(function(){
        if(v >= 5){
            gameOver()
        }
        else{
            setUp()
            countDown()};},3000);
}
function wrongAnswer(){
    console.log("wrong answer runs")
    display.innerHTML = "Crud wrong answer!"
    v++
    setTimeout(function(){
        if(v >= 5){
            gameOver()
        }
        else{
            setUp()
            countDown()};},3000);
}
function outOftime(){
    console.log("Out of time")
    display.innerHTML = "You ran out of time!"
    v++
    loss++
    setTimeout(function(){
        if(v >= 5){
            gameOver()
        }
        else{
            setUp()
            countDown()};},3000);
        }
function gameOver(){
        $('#display').text("Thats the end of the game!");
        $('#display').append('<h2 id="wins"></h2>');
        $('#display').append('<h2 id="losses"></h2>');
        $('#wins').text("Questions correct: "+ win)
        $('#losses').text("Questions incorrect: "+ loss)
        $('#button_div').empty();
        $('.card-header').text('');
        $('#button_div').append('<button id="playAgain">Play Again?!</button>');
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
function countDown(){
    timeLeft = 30;
    //var timerDiv = document.getElementById('timer');
    var timerID = setInterval(finalCountdown, 1000);
    function finalCountdown(){
        if (timeLeft == -1){
            clearInterval(timerID);
            outOftime()
        }
        else{
            document.getElementById('timer').innerHTML = "time: "+ timeLeft
            timeLeft--;
            
        }
    }
};
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
    countDown();
    console.log("prebutton v value: "+v);
    $('.normal-button').unbind().click(function(){
    var t = $(this).attr('id');
    console.log("value of t: "+ t)
    console.log("value of v after click: "+ v)
    if(questions[v].correct === t){
        rightAnswer();
        win++
        clearInterval(timerID);
        console.log("right answer, wins: "+ win);
        }
    else {
        wrongAnswer();
        loss++
        clearInterval(timerID);
        console.log("wrong answer loses: "+ loss);
    }
    //checks if the game is finished, and sets up a reset if so.
   
});
};

outerGame()
// create new func called setup.  include display and button set up .innerhtmls in it. call it in outergame to set up initial.  call it inside of right and wrong anser to reset game. call game() inside asnwers.  remove game() from finished game else.

//You are close with your playagain click.  something is not quite working with the 