//Init Canvas

var interval;
var myGameArea;
var isInPlay = false;
var upKeyPressed = false;
var downKeyPressed = false;
var frame = 0;

document.addEventListener('keydown', (e) => {
    if (e.code === "ArrowUp") {
        upKeyPressed = true;
    }
    else if (e.code === "ArrowDown") {
        downKeyPressed = true;
    }
})
document.addEventListener('keyup', (e) => {
    if (e.code === "ArrowUp") {
        upKeyPressed = false;
    }
    else if (e.code === "ArrowDown") {
        downKeyPressed = false;
    }
})

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function startGame() {
    //noodle = new Snake(-50, 210, 3, 50);
    //noodle1 = new Snake(-110, 69, 2, 50);
    //noodle2 = new Snake(-350, 400, 3, 50);
    //noodle3 = new Snake(-390, 320, 2, 50);
    //noodle4 = new Snake(-470, 425, 4, 50);
    myGameArea = new GameArea();
    playerOne = new Player(700, 200, "#874356");
    isInPlay = true;
    interval = setInterval(updateGame, 10);
    myGameArea.components.push(playerOne); //, noodle, noodle1, noodle2, noodle3, noodle4
    myGameArea.start();
}
function spawnNewSnake() {
    var y = getRandomInt(15, myGameArea.canvas.height - 15);
    var speed = 2;
    var length = 50;
    myGameArea.components.push(new Snake(-length, y, speed, length));
}
function stopComponent(component) {
    component.isInPlay = false;
}
function loseGame() {
    stopGame();
    myGameArea.loseGame();
}
function winGame() {
    myGameArea.winGame;
}
function stopGame() {
    clearInterval(interval);
    myGameArea.stop();
    isInPlay = false;
}
function updateGame() {
    if (isInPlay) {
        var nextSpawnFrame = 0
        if (frame > nextSpawnFrame) {
            spawnNewSnake();
            nextSpawnFrame += getRandomInt(1, 11);
        }
        myGameArea.update();
        frame ++;
    }
}



startGame();