import { GameObject } from "./GameObject.js";
export class ImageObject extends GameObject {
    constructor(imageUrl, sx, sy, sw, sh, x, y, width, height) {
        super(x, y, width, height);
        this.image = new Image();
        this.imageUrl = imageUrl;
        this.sx = sx;
        this.sy = sy;
        this.sw = sw;
        this.sh = sh;
        this.image.src = imageUrl;
    }
}
