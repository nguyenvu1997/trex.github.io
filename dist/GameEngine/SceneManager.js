export class SceneManager {
    addScene(scene) {
        SceneManager.scenes.push(scene);
        if (SceneManager.scenes.length == 1) {
            SceneManager.currentScene = scene;
        }
    }
    findSceneIndex(scene) {
        let indexScene = SceneManager.scenes.findIndex(element => {
            return JSON.stringify(element) == JSON.stringify(scene);
        });
        return indexScene;
    }
}
SceneManager.scenes = [];
