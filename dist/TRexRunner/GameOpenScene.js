import { Canvas } from "../GameEngine/Canvas.js";
import { ImageObject } from "../GameEngine/ImageObject.js";
import { Scene } from "../GameEngine/Scene.js";
import { SceneManager } from "../GameEngine/SceneManager.js";
import { TextObject } from "../GameEngine/TextObject.js";
import { Control } from "./Control.js";
import { GamePlayScene } from "./GamePlayScene.js";
export class GameOpenScene extends Scene {
    constructor() {
        super();
        this.objectList = [];
        this.imgUrl = "./img/200-offline-sprite.png";
        this.textStart = new TextObject("PRESS SPACE TO START GAME", Canvas.width / 2 + 45, Canvas.height / 2 - 20, 'center', 'black', '30');
        this.ground = new ImageObject(this.imgUrl, 0, 100, 2300, 500, 0, 568, 2000, 500);
        this.start = new ImageObject(this.imgUrl, 75, 0, 90, 100, 50, 500, 99, 100);
        this.sceneManagers = new SceneManager();
        this.objectList.push(this.textStart);
        this.objectList.push(this.ground);
        this.objectList.push(this.start);
    }
    update(time, delta) {
        if (Control.keys['Space']) {
            SceneManager.currentScene = (new GamePlayScene());
        }
    }
}
