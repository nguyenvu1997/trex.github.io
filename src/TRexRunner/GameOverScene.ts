import { Scene } from "../GameEngine/Scene.js";
import { ImageObject } from "../GameEngine/ImageObject.js";
import { TextObject } from "../GameEngine/TextObject.js";
import { Canvas } from "../GameEngine/Canvas.js";
import { Score } from "./Score.js";

export class GameOverScene extends Scene {
    
    imgUrl: string = "./img/200-offline-sprite.png";
    objectList = [];
    gameOver: ImageObject;
    ground: ImageObject;
    die: ImageObject;
    textGO: TextObject;
    gameScore: Score;
    highScore: Score;
    static score = 0;
    static high = 0;

    constructor() {
        super();
        this.gameOver = new ImageObject(this.imgUrl, 0, 0, 75, 100, Canvas.width / 2, Canvas.height / 2, 99, 100)
        this.textGO = new TextObject("GAME OVER", Canvas.width / 2 + 45, Canvas.height / 2 - 20, 'center', 'black', '30')
        this.ground = new ImageObject(this.imgUrl, 0, 100, 2300, 500, 0, 568, 2000, 500)
        this.die = new ImageObject(this.imgUrl, 2115, 0, 90, 100, 50, 500, 99, 100);
        this.gameScore = new Score("Score: " + GameOverScene.score, 25, 25, "left", "black", "20")
        this.highScore = new Score("High Score: " + GameOverScene.high, Canvas.width, 25, "right", "black", "20")
        this.objectList.push(this.gameOver)
        this.objectList.push(this.textGO)
        this.objectList.push(this.ground)
        this.objectList.push(this.die)
        this.objectList.push(this.gameScore)
        this.objectList.push(this.highScore)
    }

    update() {
        this.gameScore.text = "Score: " + GameOverScene.score;
        this.highScore.text = "High Score: " + GameOverScene.high;
    }

}