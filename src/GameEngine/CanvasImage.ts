import { Canvas } from "./Canvas.js";

export class CanvasImage {

    image = new Image();
    canvas: Canvas;

    constructor(imageUrl: string) {
        this.image.src = imageUrl
    }
    
}