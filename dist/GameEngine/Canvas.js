export class Canvas {
    constructor(width, height) {
        Canvas.width = width;
        Canvas.height = height;
    }
    create(el) {
        el.height = Canvas.height;
        el.width = Canvas.width;
        Canvas.ctx = el.getContext("2d");
    }
}
