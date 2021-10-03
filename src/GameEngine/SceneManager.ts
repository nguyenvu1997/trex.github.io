import { Scene } from "./Scene.js";

export class SceneManager {

    static scenes: Scene[] = [];
    static currentScene: Scene;

    loadScene() {

    }

    addScene(scene: Scene){
        SceneManager.scenes.push(scene)
        if(SceneManager.scenes.length == 1){
            SceneManager.currentScene = scene;
        }
    }

    findSceneIndex(scene: Scene): any {
        let indexScene = SceneManager.scenes.findIndex(element => {
            return JSON.stringify(element) ==  JSON.stringify(scene);
        });
        return indexScene;
    }
    
}