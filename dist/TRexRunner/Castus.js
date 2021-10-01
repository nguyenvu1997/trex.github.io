import { ImageObject } from "../GameEngine/ImageObject.js";
export class Castus extends ImageObject {
    constructor() {
        super(...arguments);
        this.velocityX = 10;
    }
    update(time, delta) {
        this.x -= this.velocityX + delta / 1000;
    }
}
