export class GameEngine {
    constructor() {
        this.lastTime = window.performance.now();
    }
    loop() {
        const time = window.performance.now();
        const delta = time - this.lastTime;
        this.lastTime = time;
        requestAnimationFrame(this.loop);
    }
}
