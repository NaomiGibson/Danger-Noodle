function drawSnakesText(startX, startY, size, spacing) {
  c.beginPath();
  //S
  c.moveTo(startX, startY);
    c.lineTo(startX - size, startY);
  c.lineTo(startX-size, startY+size/2);
  c.lineTo(startX, startY+size/2);
  c.lineTo(startX, startY+size);
  c.lineTo(startX-size, startY+size);
  //N
  c.moveTo(startX+spacing, startY+size);
  c.lineTo(startX+spacing, startY);
  c.lineTo(startX+spacing+size/2, startY);
  c.lineTo(startX+spacing+size/2, startY+size);
  c.lineTo(startX+spacing+size, startY+size);
  c.lineTo(startX+spacing+size, startY);
  //A
  c.moveTo(startX+spacing*2+size, startY+size);
  c.lineTo(startX+spacing*2+size, startY);
  c.lineTo(startX+spacing*2+size*2, startY);
  c.lineTo(startX+spacing*2+size*2, startY+size);
  c.moveTo(startX+spacing*2+size, startY+size/2);
  c.lineTo(startX+spacing*2+size*2, startY+size/2)
  //K
  c.moveTo(startX+spacing*3+size*2, startY);
  c.lineTo(startX+spacing*3+size*2, startY+size);
  c.moveTo(startX+spacing*3+size*2, startY+size/2);
  c.lineTo(startX+spacing*3+size*3, startY);
  c.moveTo(startX+spacing*3+size*2, startY+size/2);
  c.lineTo(startX+spacing*3+size*3, startY+size);
  //E
  c.moveTo(startX+spacing*4+size*4, startY);
  c.lineTo(startX+spacing*4+size*3, startY);
  c.lineTo(startX+spacing*4+size*3, startY+size);
  c.lineTo(startX+spacing*4+size*4, startY+size);
  c.moveTo(startX+spacing*4+size*3, startY+size/2);
  c.lineTo(startX+spacing*4+size*4, startY+size/2);
  //S
  c.moveTo(startX+spacing*5+size*5, startY);
  c.lineTo(startX+spacing*5+size*4, startY);
  c.lineTo(startX+spacing*5+size*4, startY+size/2);
  c.lineTo(startX+spacing*5+size*5, startY+size/2);
  c.lineTo(startX+spacing*5+size*5, startY+size);
  c.lineTo(startX+spacing*5+size*4, startY+size);

  c.stroke();
}
function drawSnake(startX, startY, length){
  c.beginPath();
  //Body
  c.moveTo(startX, startY);
  c.lineTo(startX+length, startY);
  c.lineTo(startX+length, startY+7);
  //Tongue
  c.lineTo(startX + length + 12, startY + 6);
  c.lineTo(startX + length + 7, startY + 10);
  c.lineTo(startX + length + 12, startY + 14);
  c.lineTo(startX + length, startY + 12);
  //Body
  c.lineTo(startX+length, startY+20);
  c.lineTo(startX, startY+20);
  c.arc(startX, startY+10, 10, 1.6, 4.7, false);
  //Eyes
  c.moveTo(startX+length-8, startY+6);
  c.arc(startX+length-10, startY+6, 2, Math.PI * 2, false);
  c.moveTo(startX+length-8, startY+14);
  c.arc(startX+length-10, startY+14, 2, Math.PI * 2, false);
  c.stroke();
}

c.fillStyle = "#874356";
c.fillRect((playspaceWidth-playerSize)/2, (playspaceHeight-playerSize)/2, playerSize, playerSize);

for (var i = 40; i < 200 ; i = i+25) {
  c.strokeStyle = "rgba(0, 0, 0, 0.5)";
  drawSnake(500, 90+i, 50+i);
  }

// c.strokeStyle = "rgba(200, 100, 120, 100)";
// drawSnake(500, 280);
c.strokeStyle = "rgba(100, 50, 60, 1)";
drawSnakesText(100, 50, 20, 100);
c.strokeStyle = "rgba(170, 120, 120, 1)";
drawSnakesText(700, 100, 5, 10);
c.strokeStyle = "rgba(220, 50, 60, 1)";
drawSnakesText(150, 120, 20, 5);
c.strokeStyle = "rgba(100, 10, 10, 1)";
drawSnakesText(100, 340, 80, 55);



//Body
ctx.moveTo(this.xPos, this.yPos);
ctx.lineTo(this.xPos + this.length - 3, this.yPos);
ctx.arc(this.xPos + this.length - 3, this.yPos + 3, 3, -1, 0.3, false);
ctx.lineTo(this.xPos + this.length, this.yPos + 8);
//Tongue
ctx.lineTo(this.xPos + this.length + 12, this.yPos + 6);
ctx.lineTo(this.xPos + this.length + 7, this.yPos + 10);
ctx.lineTo(this.xPos + this.length + 12, this.yPos + 14);
ctx.lineTo(this.xPos + this.length, this.yPos + 12);
//Body
ctx.lineTo(this.xPos + this.length, this.yPos + 20 - 3);
ctx.arc(this.xPos + this.length - 3, this.yPos + 20 - 3, 3, 1, 1.3, false);
ctx.lineTo(this.xPos, this.yPos + 20);
ctx.arc(this.xPos, this.yPos + 10, 10, 1.6, 4.7, false);
//Eyes
ctx.moveTo(this.xPos + this.length - 8, this.yPos + 6);
ctx.arc(this.xPos + this.length - 10, this.yPos + 6, 2, Math.PI * 2, false);
ctx.moveTo(this.xPos + this.length - 8, this.yPos + 14);
ctx.arc(this.xPos + this.length - 10, this.yPos + 14, 2, Math.PI * 2, false);
