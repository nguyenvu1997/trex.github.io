import { ImageObject } from "../GameEngine/ImageObject.js";
export class Cloud extends ImageObject {
    update() {
        this.x -= 3;
    }
}
