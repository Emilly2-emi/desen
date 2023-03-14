var randomNumber =0;

var sketch ="";

var timerCounter = 0;

var timerCheck="";

var drawSketch = "";

var answerHolder = "";

var score = 0;

array1=['pen','paper','book','bottle'];

randomNumber = Math.floor((Math.random()*array1.length));

console.log(array1[randomNumber]);

console.log(randomNumber);

sketch = array1[randomNumber];

console.log(sketch);

document.getElementById("desenhado").innerHTML="ESBOÇO A SER DESENHADO:"+ sketch;

function draw(){

}

function checkSketch(){

}

function updateCanvas(){
    background("white");
    randomNumber = Math.floor((Math.random()*array1.length));
    sketch = array1[randomNumber];
    console.log(sketch)
}

function setup(){
    canvas = createCanvas(280,280);
    background ("white");
    canvas.center();

}

function draw(){
    if(drawSketch == sketch){
        answerHolder="set";
        score=score+1;
    
       document.getElementById("pontuação").innerHTML="Pontuação : "+score;
     }
}

function checkSketch(){
    timerCounter=timerCounter+1;
    document.getElementById("tempo").innerHTML ="Tempo : "+timerCounter;
    console.log(timerCounter);
    if(timerCounter>400){
        timerCounter =0;
        timerCheck="completed";
    }
    if(timerCounter==completed||answerHolder=="set"){
        timerCheck="";
        answerHolder="";
        updateCanvas();
    }
}

  