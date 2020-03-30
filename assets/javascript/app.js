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
//outer function to be called once and at game repeats
function rightAnswer(){
    console.log("right answer runs")
    display.innerHTML = "You got it right!"
    setTimeout(function(){
        display.innerHTML = "Hi right answer"},3000);
}
function wrongAnswer(){
    console.log("wrong answer runs")
    display.innerHTML = "Crud wrong answer!"
    setTimeout(function(){
        display.innerHTML = "Hi wrong answer"},3000);
    }
function outerGame(){
    game()
}
// inner game
function game(){
    console.log("v on " + v);
    console.log("wins on " + win)
    console.log("losses on " + loss)
    console.log(questions[v].questionText)
    display.innerHTML = questions[v].questionText
    A_text.innerHTML=questions[v].answers[0]
    B_text.innerHTML=questions[v].answers[1]
    C_text.innerHTML=questions[v].answers[2]
    D_text.innerHTML=questions[v].answers[3]
    //on click is a seperate function to isolate its actions
    onClick();
    function onClick(){
        $('button').unbind().click(function(){
        var t = $(this).attr('id');
        console.log("value of t: "+ t)
        console.log("value of v after click: "+ v)
        console.log(t + " button pushed")
        console.log("correct answer: "+ questions[v].correct)
        if(questions[v].correct === t){
            rightAnswer();
            win++
            console.log("right answer, wins: "+ win);
            }
        else {
            wrongAnswer();
            loss++
            console.log("wrong answer loses: "+ loss);
        }
//checks if the game is finished, and sets up a reset if so.
   if ((v+1) >= questions.length){
    $('#display').text("Thats the end of the game!");
    $('#display').append('<h2 id="wins"></h2>');
    $('#display').append('<h2 id="losses"></h2>');
    $('#wins').text("Questions correct: "+ win)
    $('#losses').text("Questions incorrect: "+ loss)
    $('#button_div').empty();
    $('.card-header').empty();
    $('#button_div').append('<button id="playAgain">Play Again?!</button>');
    $('#playAgain').click(function(){
        v = 0
        win = 0
        loss = 0
        $('#button_div').empty();
        $('#button_div').append('<button class="btn btn-dark btn-lg normal-button" id="A"><span id="A_text">A</span></button>');
        $('#button_div').append('<button class="btn btn-dark btn-lg normal-button" id="B"><span id="B_text">B</span></button>');
        $('#button_div').append('<button class="btn btn-dark btn-lg normal-button" id="C"><span id="C_text">C</span></button>');
        $('#button_div').append('<button class="btn btn-dark btn-lg normal-button" id="D"><span id="D_text">D</span></button>');
        console.log($('#button_div'))
        outerGame();
    });
   }
   else{
    console.log("second check v on " + v);
    v++
   game()
   }
});
};
}
console.log(questions.length);
outerGame()
// create new func called setup.  include display and button set up .innerhtmls in it. call it in outergame to set up initial.  call it inside of right and wrong anser to reset game. call game() inside asnwers.  remove game() from finished game else.

//You are close with your playagain click.  something is not quite working with the 