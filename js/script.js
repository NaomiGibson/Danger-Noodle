//Init Canvas

var interval;
var myGameArea;
var isInPlay = false;
var upKeyPressed = false;
var downKeyPressed = false;
var frame = 0;
var nextSpawnFrame = 0;
const paths = [3, 27, 53, 77, 103, 127, 153, 177, 203, 227, 253, 277, 303, 327, 353, 377, 403, 427] //y positions of possible paths for snakes
const pathsInUse = []

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
    for (i = 0; i < paths.length; i++) {
        //console.log(paths[i]);
        newestNoodle = new Snake(-50, i, 50);
        myGameArea.components.push(newestNoodle); 
    }
    myGameArea.start();
}
function spawnNewSnake() {
    var y = getRandomInt(getRandomInt(0, paths.length));
    var length = getRandomInt(30, 150);
    myGameArea.components.push(new Snake(-length, y, length));
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
        }
        frame ++;
        myGameArea.update();
    }
}

startGame();