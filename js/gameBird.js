// https://itproger.com/news/104

var canvas = document.getElementById('canvas');
var context = canvas.getContext("2d");

var bird = new Image();
var bg = new Image();
var fg = new Image();
var pipeUp = new Image();
var pipeBottom = new Image();

var fly = new Audio();
var score_audio = new Audio();

fly.src = "audio/fly.mp3";
score_audio.src = "audio/score.mp3";

bird.src = "img/bird.png";
bg.src = "img/bg.png";
fg.src = "img/fg.png";
pipeUp.src = "img/pipeUp.png";
pipeBottom.src = "img/pipeBottom.png";

var height = 110;

//отслеживаем нажатие на кнопки
document.addEventListener("keydown", moveUp);

function moveUp() {
    yPos -=25;
    fly.play();
}

//создание блоков
var pipe = [];
pipe[0] = {
    x : canvas.width,
    y : 0
};



var score = 0;
//позиция птички

var xPos = 10;
var yPos = 150;
var grav = 1.5;



function draw() {
    context.drawImage(bg, 0, 0);

    for (let i=0; i<pipe.length; i++){
        context.drawImage(pipeUp, pipe[i].x, pipe[i].y);
        context.drawImage(pipeBottom, pipe[i].x, pipe[i].y + pipeUp.height + height);

        pipe[i].x--;

        if (pipe[i].x === 125){
            pipe.push({
               x : canvas.width,
               y : Math.floor(Math.random() * pipeUp.height) - pipeUp.height
            });
            console.log(pipe[i].y + pipeUp.height);

        }
        
        if (xPos + bird.width >= pipe[i].x && xPos <= pipe[i].x + pipeUp.width && (yPos <= pipe[i].y + pipeUp.height || yPos + bird.height >= pipe[i].y + pipeUp.height + height) || yPos + bird.height >= canvas.height - fg.height){
            location.reload(); //перезагрузка страницы
        }
        if (pipe[i].x === 5){
            score++;
            score_audio.play();
        }
    }


    context.drawImage(fg, 0, canvas.height - fg.height);
    context.drawImage(bird, xPos, yPos);

    yPos +=grav;

    //Установка счета
    context.fillStyle = "#000";
    context.font = "24px Verdana";
    context.fillText("Счет: " + score, 10, canvas.height - 20);

    requestAnimationFrame(draw); //для постоянного вызова метода
}

pipeBottom.onload = draw;