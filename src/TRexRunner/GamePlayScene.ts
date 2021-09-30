import { CanvasRenderer } from "../GameEngine/CanvasRenderer.js";
import { Cloud } from "./Cloud.js";
import { Castus } from "./Castus.js";
import { Bird } from "./Bird.js";

export class GamePlayScene extends Scene {
    objectList = [];
    initialSpawnTimer: number = 200;
    spawnTimer: number = this.initialSpawnTimer;
    clouds = [];
    obstacles = [];
    canvasRenderer: CanvasRenderer;
    imgUrl: string = "./img/200-offline-sprite.png";

    constructor() {
        super();
    }

    SpawnCloud() {
        let cloud = new Cloud(this.imgUrl, 175, 0, 85, 100, 1500, 400, 85, 100);
        this.clouds.push(cloud);
    }

    SpawnObstacle() {
        let type = this.randomIntInRange(0, 2);
    
        let castus = new Castus(this.imgUrl, 850, 0, 53, 100, 1500, 500, 52, 100)
        let bird = new Bird(this.imgUrl, 260, 0, 90, 100, 1500, 500, 90, 100)
    
        if (type == 1) {
            this.obstacles.push(castus);
        } else {
            this.obstacles.push(bird);
        }
    }

    addObject(obj) {
        this.objectList.push(obj)
    }

    randomIntInRange(min: number, max: number) {
        return Math.round(Math.random() * (max - min) + min);
    }

    update() {
        this.objectList.forEach(element => {
            element.update()
        });

        this.spawnTimer--;
        if (this.spawnTimer <= 0) {
            this.SpawnCloud();
            this.SpawnObstacle();
            console.log(this.obstacles);
            this.spawnTimer = this.initialSpawnTimer - 12;

            if (this.spawnTimer < 60) {
                this.spawnTimer = 60;
            }
        }

        for (let i = 0; i < this.clouds.length; i++) {
            let c = this.clouds[i];
            c.update();
            this.canvasRenderer.renderImage(c);
        }

        for (let i = 0; i < this.obstacles.length; i++) {
            let o = this.obstacles[i];
            // if (player.x < o.x + o.w && player.x + player.w > o.x &&
            //     player.y < o.y + o.h && player.y + player.h > o.y) 
            // {
            //     obstacles = [];
            //     score = 0;
            //     spawnTimer = initialSpawnTimer;
            // }
            o.update();
            this.canvasRenderer.renderImage(o);
        }
    }
}