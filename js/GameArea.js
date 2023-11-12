class GameArea {
    constructor() {
        //console.log(document.getElementById("gameCanvas"));
        this.canvas = document.getElementById("gameCanvas");
        this.canvas.width = 800;
        this.canvas.height = 450;
        this.ctx = this.canvas.getContext("2d");
        this.components = [];
        this.paths = new PathSet();
    }
    start() {
        //console.log(this.components);
        
        for (var i = 0; i <= (this.canvas.height - 23) / 23; i++) {
            this.paths.addPath(i);
            console.log(i)
        }
        console.log(this.paths.usablePaths);
        this.components.forEach((element) => element.start(this.ctx));
    }
    clear() {
       this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    update() {
        myGameArea.clear();
        this.components.forEach((element) => element.update(this.ctx));
    }
    stop() {
        this.clear()
        //this.ctx.font = "70px Georgia";
        //this.ctx.fillText("Stopped", this.canvas.width/2 - 300, this.canvas.height/2);
    }
    loseGame() {
        this.ctx.fillStyle = "rgba(246, 231, 216, 0.9)";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.font = "30px Georgia";
        this.ctx.fillStyle = "#874356";
        this.ctx.fillText("You CRETIN! You BUFFOON! You BLITHERING IDIOT!", 15, 150);
        this.ctx.font = "60px Georgia";
        this.ctx.fillText("You hit a Danger Noodle", 60, 350);
    }
    winGame() {
        this.clear()
        this.ctx.font = "70px Georgia";
        this.ctx.fillText("You Win", this.canvas.width / 2 - 370, this.canvas.height / 2);
    }
}