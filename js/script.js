//Init Canvas

var interval;
var myGameArea;
var isInPlay;
var upKeyPressed;
var downKeyPressed;

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

function startGame() {
    noodle = new Snake(-50, 210, 3, 50);
    noodle1 = new Snake(-110, 69, 2, 50);
    noodle2 = new Snake(-350, 400, 3, 50);
    noodle3 = new Snake(-390, 320, 2, 50);
    noodle4 = new Snake(-470, 425, 4, 50);
    myGameArea = new GameArea();
    playerOne = new Player(700, 200, "#874356");
    isInPlay = true;
    interval = setInterval(updateGame, 10);
    myGameArea.components.push(playerOne, noodle, noodle1, noodle2, noodle3, noodle4);
    myGameArea.start();
}
function updateGame() {
    if (isInPlay) {
        myGameArea.update();
    }
}
function stopGame() {
    clearInterval(interval);
    myGameArea.stop();
    isInPlay = false;
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

startGame();