import { ImageObject } from "../GameEngine/ImageObject.js";

export class Bird extends ImageObject {

    originalSX: number = this.sx;
    originalY: number = this.y;
    drawBirdTimer: number = 0;
    type: number;
    velocityX: number = 10;

    constructor(imageUrl: string, sx: number, sy: number, sw: number, sh: number, x: number, y: number, width: number, height: number){
        super(imageUrl, sx, sy, sw,sh, x,y ,width,height)
        this.type = this.randomIntInRange(0, 2);
    }

    randomIntInRange(min: number, max: number) {
        return Math.round(Math.random() * (max - min) + min);
    }

    update(time:number, delta: number) {
        this.x -= this.velocityX + delta/1000;
        
        if (this.type == 1) {
            this.y = this.originalY;
            if (this.drawBirdTimer <= 10) {
                this.sx = this.originalSX;
            } else if (this.drawBirdTimer <= 20) {
                this.sx = this.originalSX + 88;
            } else {
                this.drawBirdTimer = 0;
            }
        } else {
            this.y = this.originalY - 50;
            if (this.drawBirdTimer <= 10) {
                this.sx = this.originalSX;
            } else if (this.drawBirdTimer <= 20) {
                this.sx = this.originalSX + 88;
            } else {
                this.drawBirdTimer = 0;
            }
        }

        this.drawBirdTimer++;
    }

}