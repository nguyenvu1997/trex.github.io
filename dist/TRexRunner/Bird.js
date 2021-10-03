import { ImageObject } from "../GameEngine/ImageObject.js";
export class Bird extends ImageObject {
    constructor(imageUrl, sx, sy, sw, sh, x, y, width, height) {
        super(imageUrl, sx, sy, sw, sh, x, y, width, height);
        this.originalSX = this.sx;
        this.originalY = this.y;
        this.drawBirdTimer = 0;
        this.velocityX = 10;
        this.type = this.randomIntInRange(0, 2);
    }
    randomIntInRange(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }
    update(time, delta) {
        this.x -= this.velocityX + delta / 1000;
        if (this.type == 1) {
            this.y = this.originalY;
            if (this.drawBirdTimer <= 10) {
                this.sx = this.originalSX;
            }
            else if (this.drawBirdTimer <= 20) {
                this.sx = this.originalSX + 88;
            }
            else {
                this.drawBirdTimer = 0;
            }
        }
        else {
            this.y = this.originalY - 50;
            if (this.drawBirdTimer <= 10) {
                this.sx = this.originalSX;
            }
            else if (this.drawBirdTimer <= 20) {
                this.sx = this.originalSX + 88;
            }
            else {
                this.drawBirdTimer = 0;
            }
        }
        this.drawBirdTimer++;
    }
}
