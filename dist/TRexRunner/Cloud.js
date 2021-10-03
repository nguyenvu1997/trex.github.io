import { ImageObject } from "../GameEngine/ImageObject.js";
export class Cloud extends ImageObject {
    update(time, delta) {
        this.x -= 3;
    }
}
