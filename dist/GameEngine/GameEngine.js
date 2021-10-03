import { CanvasRenderer } from "./CanvasRenderer.js";
import { SceneManager } from "./SceneManager.js";
export class GameEngine {
    constructor() {
        this.sceneManager = new SceneManager();
        this.lastTime = window.performance.now();
        ;
        this.renderer = new CanvasRenderer();
    }
    addScene(scene) {
        this.sceneManager.addScene(scene);
    }
    loop() {
        const time = window.performance.now();
        const delta = window.performance.now() - this.lastTime;
        this.lastTime = time;
        // SceneManager.scenes.forEach(element => {
        //     element.update(time, delta);
        //     this.renderer.render(element)
        // });
        // console.log(SceneManager.currentScene);
        let scene = SceneManager.currentScene;
        scene.update(time, delta);
        this.renderer.render(scene);
        requestAnimationFrame(() => {
            this.loop();
        });
    }
}
