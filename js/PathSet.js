class PathSet {
    constructor() {
        this.usablePaths = [] //y positions of possible paths for snakes
    }
    addPath(path) {
        this.usablePaths.push(8 + path * 23);
    }
    removePath(path) {
        this.usablePaths.splice(path);
    }
}