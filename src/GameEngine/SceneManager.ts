import { Scene } from "./Scene.js";

export class SceneManager {

    scenes: Scene[];

    loadScene() {

    }

    addScene(scene: Scene) {
        this.scenes.push(scene)
    }
    
}