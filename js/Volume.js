class Volume {
    constructor(left, top, right, bottom) {
        this.top = top;
        this.right = right;
        this.bottom = bottom;
        this.left = left;
        this.overlappingObject;
        this.overlapFound = false;
    }

    checkObjectOverlap(other) {
        //console.log("object checking");
        this.overlapFound = false
        if (other == playerOne) {
            other.volumes.forEach((volume) => this.checkVolumeOverlap(volume));
            //console.log("object overlap", this.overlapFound);
            return this.overlapFound;
        }
        else {
            console.log("overlapping object is not a component")
        }
    }

    checkVolumeOverlap(other) {
        //console.log("volume checking");
        //console.log(this.left, this.top, this.right, this.bottom);
        //console.log(other.left, other.top, other.right, other.bottom)
        //if (other == Volume) {
        if (this.left < other.right &&
            this.right > other.left &&
            this.top < other.bottom &&
            this.bottom > other.top) {
            this.overlapFound = true;
            }
        //console.log("volume overlap", this.overlapFound);
        //}
        //else {
            //console.log("non-volume object in volumes array")
        //}
    }
}