class Snake extends Component {
    constructor(x, path, length) {
        super(x, paths[path], 3, "#874356");
        this.path = path
        this.y = paths[path];
        this.length = length;
        this.volumes = [new Volume(x-5, this.y, x + this.length, this.y + 20), new Volume(x + this.length, this.y + 5, x + this.length + 12, this.y + 14)];
    }
    start(ctx) {
        super.start();
        this.draw(ctx);
        pathsInUse[this.path] = true
    }
    update(ctx) {
        if (this.isInPlay) {
            super.update();
            this.moveRight(this.speed);
            this.draw(ctx);
            if (this.checkOverlap(playerOne)) {
                this.onBeginOverlapPlayer();
            }
            if (this.xPos > myGameArea.canvas.width) {
                removeComponent(this);
            }
        }
    }
    draw(ctx) {
        ctx.beginPath();
        //Body
        ctx.moveTo(this.xPos, this.yPos);
        ctx.lineTo(this.xPos + this.length - 5, this.yPos);
        ctx.arc(this.xPos + this.length - 5, this.yPos + 5, 5, -1.5, 0.3, false);
        ctx.lineTo(this.xPos + this.length, this.yPos + 8);
        //Tongue
        ctx.lineTo(this.xPos + this.length + 12, this.yPos + 6);
        ctx.lineTo(this.xPos + this.length + 7, this.yPos + 10);
        ctx.lineTo(this.xPos + this.length + 12, this.yPos + 14);
        ctx.lineTo(this.xPos + this.length, this.yPos + 12);
        //Body
        ctx.lineTo(this.xPos + this.length, this.yPos + 20 - 5);
        ctx.arc(this.xPos + this.length - 5, this.yPos + 20 - 5, 5, 0, 1.8, false);
        ctx.lineTo(this.xPos, this.yPos + 20);
        ctx.arc(this.xPos, this.yPos + 10, 10, 1.6, 4.7, false);
        //Eyes
        ctx.moveTo(this.xPos + this.length - 8, this.yPos + 6);
        ctx.arc(this.xPos + this.length - 10, this.yPos + 6, 2, Math.PI * 2, false);
        ctx.moveTo(this.xPos + this.length - 8, this.yPos + 14);
        ctx.arc(this.xPos + this.length - 10, this.yPos + 14, 2, Math.PI * 2, false);
        ctx.stroke();
        //console.log(this.constructor.name, "drawing", this.xPos, this.yPos);
    }
    moveRight(speed) {
        this.xPos += speed;
        this.volumes.forEach((volume) => {
            volume.right += speed;
            volume.left += speed;
        })
    }
    checkOverlap(other) {
        for (let i = 0; i < this.volumes.length; i++) {
            if (this.volumes[i].checkObjectOverlap(other)) {
                return true
            }
        } 
    }
    onBeginOverlapPlayer() {
        loseGame();
    }
}