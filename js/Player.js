class Player extends Component {
    constructor(x, y, color) {
        super(x, y, 0, color);
        this.speed = 2;
        this.size = 50;
        this.score = 0;
        this.volumes = [new Volume(x, y, x + this.size, y + this.size)];
        console.log(this.constructor.name, "constucting");
    }
    start(ctx) {
        super.start();
        this.draw(ctx);
    }
    update(ctx) {
        if (this.isInPlay) {
            super.update();
            if (upKeyPressed) {
                this.moveDown(-this.speed);
            }
            if (downKeyPressed) {
                this.moveDown(this.speed);
            }
            this.draw(ctx);
        }
    }
    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.xPos, this.yPos, this.size, this.size);
        //console.log(this.constructor.name, "drawing", this.xPos, this.yPos);
    }
    moveDown(speed) {
        this.yPos += speed;
        this.volumes.forEach((volume) => {
            volume.top += speed;
            volume.bottom += speed;
        })
    }
}