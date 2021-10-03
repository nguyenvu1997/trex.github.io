export class Canvas {
    
    static width: number = 1500;
    static height: number = 600;
    static ctx: CanvasRenderingContext2D;

    static init(el: HTMLCanvasElement) {
        el.height = Canvas.height;
        el.width = Canvas.width;
        Canvas.ctx = el.getContext("2d");
    }

}