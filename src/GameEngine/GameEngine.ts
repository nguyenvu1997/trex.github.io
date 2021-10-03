import { GameOverScene } from "../TRexRunner/GameOverScene.js";
import { CanvasRenderer } from "./CanvasRenderer.js";
import { Scene } from "./Scene.js";
import { SceneManager } from "./SceneManager.js";


export class GameEngine {
    
    sceneManager: SceneManager;
    renderer: CanvasRenderer;
    lastTime: number;

    constructor() {
        this.sceneManager = new SceneManager();
        this.lastTime = window.performance.now();;
        this.renderer = new CanvasRenderer();
    }

    addScene(scene: Scene) {
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
        this.renderer.render(scene)


        requestAnimationFrame(() => {
            this.loop();
        });
    }

}