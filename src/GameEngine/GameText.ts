export class GameText {
    text: string;
    x: number;
    y: number;
    align: string;
    color: string;
    size: string;


    constructor(text: string, x: number, y: number, align: string, color: string, size: string) {
        this.text = text;
        this.x = x;
        this.y = y;
        this.align = align;
        this.color = color;
        this.size = size;
    }
}
