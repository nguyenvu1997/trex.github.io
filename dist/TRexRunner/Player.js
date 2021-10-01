import { Canvas } from "../GameEngine/Canvas.js";
import { ImageObject } from "../GameEngine/ImageObject.js";
import { Control } from "./Control.js";
export class Player extends ImageObject {
    constructor() {
        super(...arguments);
        this.dy = 0;
        this.jumpDistance = 15;
        this.grounded = false;
        this.jumpTimer = 0;
        this.gravity = 1;
        this.orginalSX = 75;
        this.orginalSW = 85;
        this.tRexRunTimer = 0;
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
        Player.position['x'] = this.x;
        Player.position['y'] = this.y;
        Player.position['width'] = this.width;
        Player.position['height'] = this.height;
        // Duck
        if (Control.keys['KeyS']) {
            this.sx = 2205;
            this.sw = 120;
            Player.position['y'] = this.y + 80;
        }
        else {
            // this.sx = this.orginalSX;
            this.sw = this.orginalSW;
            if (this.grounded) {
                if (this.tRexRunTimer <= 10) {
                    this.sx = 1940;
                }
                else if (this.tRexRunTimer <= 20) {
                    this.sx = 1850;
                }
                else {
                    this.tRexRunTimer = 0;
                }
                this.tRexRunTimer++;
            }
        }
        this.y += this.dy;
        // Gravity
        if (this.y + this.height < Canvas.height) {
            this.dy += this.gravity;
            this.grounded = false;
        }
        else {
            this.dy = 0;
            this.grounded = true;
            this.y = Canvas.height - this.height;
        }
    }
}
Player.position = {};
