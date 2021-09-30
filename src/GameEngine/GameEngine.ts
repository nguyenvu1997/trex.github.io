import { SceneManager } from "./SceneManager.js";

export class GameEngine {
    scenes: SceneManager;

    lastTime: number = window.performance.now();

    loop(): void {
        const time = window.performance.now();
        const delta = time - this.lastTime;
        this.lastTime = time;
        requestAnimationFrame(this.loop)
    }

}