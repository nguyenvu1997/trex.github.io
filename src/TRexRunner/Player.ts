import { Control } from "./Control.js";
import { GameImg } from "../GameEngine/GameImg.js";
import { Canvas } from "../GameEngine/Canvas";

export class Player extends GameImg {
    dy: number = 0;
    jumpDistance: number = 15;
    grounded: boolean = false;
    jumpTimer: number = 0;
    gravity: number = 1;
    canvas: Canvas;

    jump() {
        if (this.grounded && this.jumpTimer == 0) {
            this.jumpTimer = 1;
            this.dy = -this.jumpDistance;
        } else if (this.jumpTimer > 0 && this.jumpTimer < 15) {
            this.jumpTimer++;
            this.dy = -this.jumpDistance - (this.jumpTimer / 50);
        }
    }

    update() {
        // Jump
        if (Control.keys['Space'] || Control.keys['KeyW']) {
            this.jump();
        } else {
            this.jumpTimer = 0;
        }

        this.y += this.dy;

        // Gravity
        if (this.y + this.height < this.canvas.height) {
            this.dy += this.gravity;
            this.grounded = false;
        } else {
            this.dy = 0;
            this.grounded = true;
            this.y = this.canvas.height - this.height;
        }
    }
}