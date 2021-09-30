import { Control } from "./Control.js";
import { GameImg } from "../GameEngine/GameImg.js";
export class Player extends GameImg {
    constructor() {
        super(...arguments);
        this.dy = 0;
        this.jumpDistance = 15;
        this.grounded = false;
        this.jumpTimer = 0;
        this.gravity = 1;
    }
    jump() {
        if (this.grounded && this.jumpTimer == 0) {
            this.jumpTimer = 1;
            this.dy = -this.jumpDistance;
        }
        else if (this.jumpTimer > 0 && this.jumpTimer < 15) {
            this.jumpTimer++;
            this.dy = -this.jumpDistance - (this.jumpTimer / 50);
        }
    }
    update() {
        // Jump
        if (Control.keys['Space'] || Control.keys['KeyW']) {
            this.jump();
        }
        else {
            this.jumpTimer = 0;
        }
        this.y += this.dy;
        // Gravity
        if (this.y + this.height < this.canvas.height) {
            this.dy += this.gravity;
            this.grounded = false;
        }
        else {
            this.dy = 0;
            this.grounded = true;
            this.y = this.canvas.height - this.height;
        }
    }
}
