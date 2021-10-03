import { Canvas } from "../GameEngine/Canvas.js";
import { CanvasRenderer } from "../GameEngine/CanvasRenderer.js";
import { Scene } from "../GameEngine/Scene.js";
import { SceneManager } from "../GameEngine/SceneManager.js";
import { Bird } from "./Bird.js";
import { Castus } from "./Castus.js";
import { Cloud } from "./Cloud.js";
import { GameOverScene } from "./GameOverScene.js";
import { Ground } from "./Ground.js";
import { Player } from "./Player.js";
import { Score } from "./Score.js";
export class GamePlayScene extends Scene {
    constructor() {
        super();
        this.objectList = [];
        this.initialSpawnTimer = 200;
        this.spawnTimer = this.initialSpawnTimer;
        this.clouds = [];
        this.obstacles = [];
        this.isAlive = true;
        this.imgUrl = "./img/200-offline-sprite.png";
        this.sceneManager = new SceneManager();
        this.score = 0;
        this.high = GameOverScene.high;
        this.gameScore = new Score("Score: " + this.score, 25, 25, "left", "black", "20");
        this.highScore = new Score("High Score: " + this.high, Canvas.width, 25, "right", "black", "20");
        this.ground = new Ground(this.imgUrl, 0, 100, 2300, 500, 0, 568, 2000, 500);
        this.player = new Player(this.imgUrl, 75, 0, 85, 100, 30, 200, 85, 100);
        this.objectList.push(this.gameScore, this.highScore, this.ground, this.player);
        GamePlayScene.data = {
            'score': 0,
            'high': 0
        };
    }
    spawnCloud() {
        this.cloud = new Cloud(this.imgUrl, 175, 0, 85, 100, 1500, 400, 85, 100);
        this.clouds.push(this.cloud);
    }
    spawnObstacle() {
        let type = this.randomIntInRange(0, 2);
        this.castus = new Castus(this.imgUrl, 850, 0, 53, 100, 1500, 500, 52, 100);
        this.bird = new Bird(this.imgUrl, 260, 0, 90, 100, 1500, 500, 90, 100);
        if (type == 1) {
            this.obstacles.push(this.castus);
        }
        else {
            this.obstacles.push(this.bird);
        }
    }
    addObject(obj) {
        this.objectList.push(obj);
    }
    randomIntInRange(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }
    update(time, delta) {
        Canvas.ctx.clearRect(0, 0, Canvas.width, Canvas.height);
        // Score
        this.score++;
        this.gameScore.text = "Score: " + this.score;
        if (this.isAlive) {
            if (this.score > this.high) {
                this.high = this.score;
                this.highScore.text = "High Score: " + this.high;
            }
        }
        else {
            this.isAlive = true;
            this.score = 0;
        }
        let cvRender = new CanvasRenderer();
        this.objectList.forEach(element => {
            element.update();
        });
        // Spawn clouds and obstacles
        this.spawnTimer--;
        if (this.spawnTimer <= 0) {
            this.spawnCloud();
            this.spawnObstacle();
            this.spawnTimer = this.initialSpawnTimer - 12;
            if (this.spawnTimer < 60) {
                this.spawnTimer = 60;
            }
        }
        for (let i = 0; i < this.clouds.length; i++) {
            let c = this.clouds[i];
            c.update(time, delta);
            cvRender.renderImage(c);
        }
        for (let i = 0; i < this.obstacles.length; i++) {
            let o = this.obstacles[i];
            if (Player.position.x < o.x + o.width && Player.position.x + Player.position.width > o.x &&
                Player.position.y < o.y + o.height && Player.position.y + Player.position.height > o.y) {
                this.obstacles = [];
                this.isAlive = false;
                GamePlayScene.data['score'] = this.score;
                GamePlayScene.data['high'] = this.high;
                SceneManager.currentScene = new GameOverScene();
            }
            o.update(time, delta);
            cvRender.renderImage(o);
        }
    }
}
GamePlayScene.data = {};
