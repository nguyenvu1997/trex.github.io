import { Canvas } from "./Canvas.js";
import { GameObject } from "./GameObject.js";

export class ImageObject extends GameObject {

    canvas: Canvas;
    imageUrl: string;
    sx: number;
    sy: number;
    sw: number;
    sh: number;
    x: number;
    y: number;
    width: number;
    height: number;
    image = new Image();

    constructor(imageUrl: string, sx: number, sy: number, sw: number, sh: number, x: number, y: number, width: number, height: number) {
        super(x, y, width, height);
        this.imageUrl = imageUrl;
        this.sx = sx;
        this.sy = sy;
        this.sw = sw;
        this.sh = sh;
        this.image.src = imageUrl
    }
    
}