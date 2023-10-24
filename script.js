console.log("script.js read");

//Config
const playspaceWidth = 800;
const playspaceHeight = 450;
const playerXOffset = 50;
const playerColor = "#874356";
const playerSize = 30;

//Init Canvas
var gameCanvas = document.querySelector("canvas");
gameCanvas.width = playspaceWidth;
gameCanvas.height = playspaceHeight;
var c = gameCanvas.getContext("2d");

//Init Player
c.fillStyle = playerColor;
var player = c.fillRect(playspaceWidth - playerSize - playerXOffset, (playspaceHeight - playerSize) / 2, playerSize, playerSize);

//Init Snakes
function snake(startX, startY, length) {
    c.beginPath();
    //Body
    c.moveTo(startX, startY);
    c.lineTo(startX + length, startY);
    c.lineTo(startX + length, startY + 8);
    //Tongue
    c.lineTo(startX + length + 12, startY + 6);
    c.lineTo(startX + length + 7, startY + 10);
    c.lineTo(startX + length + 12, startY + 14);
    c.lineTo(startX + length, startY + 12);
    //Body
    c.lineTo(startX + length, startY + 20);
    c.lineTo(startX, startY + 20);
    c.arc(startX, startY + 10, 10, 1.6, 4.7, false);
    //Eyes
    c.moveTo(startX + length - 8, startY + 6);
    c.arc(startX + length - 10, startY + 6, 2, Math.PI * 2, false);
    c.moveTo(startX + length - 8, startY + 14);
    c.arc(startX + length - 10, startY + 14, 2, Math.PI * 2, false);
    c.stroke();
}
snake(200, 200, 200);

