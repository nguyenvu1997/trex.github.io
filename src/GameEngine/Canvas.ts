export class Canvas {
    width: number;
    height: number;
    static ctx: CanvasRenderingContext2D;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    create(el: HTMLCanvasElement) {
        el = document.querySelector('#test-ge');
        el.height = this.height;
        el.width = this.width;
        Canvas.ctx = el.getContext("2d");
    }
}