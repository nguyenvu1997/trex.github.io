export class Canvas {
    
    static width: number;
    static height: number;
    static ctx: CanvasRenderingContext2D;

    constructor(width: number, height: number) {
        Canvas.width = width;
        Canvas.height = height;
    }

    create(el: HTMLCanvasElement) {
        el.height = Canvas.height;
        el.width = Canvas.width;
        Canvas.ctx = el.getContext("2d");
    }

}