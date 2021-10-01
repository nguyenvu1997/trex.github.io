import { TRexGame } from "../Game.js";
import { CanvasRenderer } from "../GameEngine/CanvasRenderer.js";
import { Scene } from "../GameEngine/Scene.js";
import { Bird } from "./Bird.js";
import { Castus } from "./Castus.js";
import { Cloud } from "./Cloud.js";
import { Player } from "./Player.js";

export class GamePlayScene extends Scene {

    objectList = [];
    initialSpawnTimer: number = 200;
    spawnTimer: number = this.initialSpawnTimer;
    clouds = [];
    obstacles = [];
    cloud: Cloud;
    bird: Bird;
    castus: Castus;
    imgUrl: string = "./img/200-offline-sprite.png";
    static isAlive = true;

    constructor() {
        super();
    }

    spawnCloud() {
        this.cloud = new Cloud(this.imgUrl, 175, 0, 85, 100, 1500, 400, 85, 100);
        this.clouds.push(this.cloud);
    }

    spawnObstacle() {
        let type = this.randomIntInRange(0, 2);

        this.castus = new Castus(this.imgUrl, 850, 0, 53, 100, 1500, 500, 52, 100)
        this.bird = new Bird(this.imgUrl, 260, 0, 90, 100, 1500, 500, 90, 100)

        if (type == 1) {
            this.obstacles.push(this.castus);
        } else {
            this.obstacles.push(this.bird);
        }
    }

    addObject(obj) {
        this.objectList.push(obj)
    }

    randomIntInRange(min: number, max: number) {
        return Math.round(Math.random() * (max - min) + min);
    }

    update() {
        let cvRender = new CanvasRenderer();
        this.objectList.forEach(element => {
            element.update()
        });

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
            c.update();
            cvRender.renderImage(c);
        }

        for (let i = 0; i < this.obstacles.length; i++) {
            let o = this.obstacles[i];
            if (Player.position.x < o.x + o.width && Player.position.x + Player.position.width > o.x &&
                Player.position.y < o.y + o.height && Player.position.y + Player.position.height > o.y) 
            {
                this.obstacles = []
                GamePlayScene.isAlive = false;
            }
            o.update();
            cvRender.renderImage(o);
        }
    }
    
}