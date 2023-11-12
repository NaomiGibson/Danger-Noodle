//Init Canvas

var myGameArea;
var isInPlay = false;
var interval;
var frame = 0;
var nextSpawnFrame = 0;
var upKeyPressed = false;
var downKeyPressed = false;

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
    myGameArea = new GameArea();
    playerOne = new Player(700, 200, "#874356");
    isInPlay = true;
    interval = setInterval(updateGame, 10);
    myGameArea.components.push(playerOne); 
    myGameArea.start();
}
function spawnNewSnake() {
    var y = getRandomInt(getRandomInt(0, myGameArea.paths.usablePaths.length));
    var length = getRandomInt(30, 150);
    thisSnake = new Snake(-length, y, length);
    thisSnake.start(myGameArea.ctx);
    myGameArea.components.push(thisSnake);
}
function stopComponent(component) {
    component.isInPlay = false;
}
function removeComponent(component) {
    myGameArea.components.indexOf(component);
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
        if (frame > nextSpawnFrame) {
            spawnNewSnake();
            nextSpawnFrame += getRandomInt(10, 100);
            //console.log("Snake spawn frame")
        }
        frame ++;
        myGameArea.update();
    }
}

startGame();