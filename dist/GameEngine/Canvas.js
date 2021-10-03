export class Canvas {
    static init(el) {
        el.height = Canvas.height;
        el.width = Canvas.width;
        Canvas.ctx = el.getContext("2d");
    }
}
Canvas.width = 1500;
Canvas.height = 600;
