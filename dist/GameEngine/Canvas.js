export class Canvas {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    create(el) {
        el = document.querySelector('#test-ge');
        el.height = this.height;
        el.width = this.width;
        Canvas.ctx = el.getContext("2d");
    }
}
