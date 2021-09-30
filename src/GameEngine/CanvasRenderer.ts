import { CanvasImage } from "./CanvasImage.js";
import { GameEngine } from "./GameEngine.js";
import { GameImg } from "./GameImg.js";
import { GameText } from "./GameText";
import { Canvas } from "./Canvas.js";

export class CanvasRenderer {
    game: GameEngine;
    canvasImage: CanvasImage;

    constructor() {

    }

    render(scene: Scene) {
        scene.objectList.forEach(obj => {
            if (obj instanceof GameImg) {
                this.renderImage(obj)
            } else if (obj instanceof GameText) {
                this.renderText(obj)
            } else {
                console.log('Cannot Rendering')
            }
        });
    }

    renderImage(object) {
        const { imageUrl, sx, sy, sw, sh, x, y, width, height } = object;
        this.canvasImage = new CanvasImage(imageUrl);
        Canvas.ctx.beginPath();
        Canvas.ctx.drawImage(this.canvasImage.image, sx, sy, sw, sh, x, y, width, height);
        Canvas.ctx.closePath();

    }

    renderText(object) {
        const { text, x, y, align, color, size } = object;
        Canvas.ctx.beginPath();
        Canvas.ctx.fillStyle = color;
        Canvas.ctx.font = size + "px sans-serif";
        Canvas.ctx.textAlign = align as CanvasTextAlign;
        Canvas.ctx.fillText(text, x, y);
        Canvas.ctx.closePath();
    }
}