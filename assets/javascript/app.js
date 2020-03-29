let wins = document.getElementById("wins"); 
let losses = document.getElementById("losses");
let display = document.getElementById("display");
let A_button = document.getElementById("A")
let B_button = document.getElementById("B")
let C_button = document.getElementById("C")
let D_button = document.getElementById("D")
let A_text = document.getElementById("A_text");
let B_text = document.getElementById("B_text");
let C_text = document.getElementById("C_text");
let D_text = document.getElementById("D_text");
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
];
var win = 0
var loss = 0
var v = 0
//console.log(questions[0].questionText)
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
    onClick()
        }
    function onClick(){
        $('.normal-button').on('click',function(){
        var t = $(this).attr('id');
        console.log(t + " button pushed")
        if(questions[v].correct === $(this).attr('id')){
            display.innerHTML = "Woot! Right Answer!"
            win++
            console.log("right answer, wins: "+ win);
        }
        else{
            display.innerHTML = "Crud wrong answer!"
            loss++
            console.log("wrong answer loses: "+ loss);
        }
   if (v < questions.length){
    v++
    console.log("second check v on " + v);
   game()
   }
   else{
    display.innerHTML = "Thats the end of the game!"
   }
    });
}
game()
