import { ImageObject } from "../GameEngine/ImageObject.js";

export class Castus extends ImageObject {

    velocityX: number = 10;

    update(time: number, delta: number) {
        this.x -= this.velocityX  + delta / 1000
    }
    
}