import { ImageObject } from "../GameEngine/ImageObject.js";

export class Cloud extends ImageObject {

    update(time: number, delta: number) {
        this.x -= 3
    }
    
}