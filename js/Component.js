class Component {
    constructor(x, y, speed, color) {
        this.xPos = x;
        this.yPos = y;
        this.speed = speed;
        this.accelleration;
        this.isInPlay = true;
        this.color = color;
        this.volumes = [];
        //console.log(this.constructor.name, "component constructing");
    }
    start() {
        //console.log(this.constructor.name, "starting");
    }
    onRemoveComponent() {
        
    }
    update() {

    }
    
}