import { GameImg } from "../GameEngine/GameImg.js";
export class Bird extends GameImg {
    constructor() {
        super(...arguments);
        this.originalSX = this.sx;
        this.drawBirdTimer = 0;
    }
    update() {
        this.x -= 5;
        if (this.drawBirdTimer <= 10) {
            this.sx = this.originalSX;
        }
        else if (this.drawBirdTimer <= 20) {
            this.sx = this.originalSX + 88;
        }
        else {
            this.drawBirdTimer = 0;
        }
        this.drawBirdTimer++;
    }
}
