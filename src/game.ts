import { Canvas } from "./GameEngine/Canvas.js";
import { CanvasRenderer } from "./GameEngine/CanvasRenderer.js";
import { GameEngine } from "./GameEngine/GameEngine.js";
import { Control } from "./TRexRunner/Control.js";
import { GameOpenScene } from "./TRexRunner/GameOpenScene.js";
import { GameOverScene } from "./TRexRunner/GameOverScene.js";
import { GamePlayScene } from "./TRexRunner/GamePlayScene.js"
import { Ground } from "./TRexRunner/Ground.js";
import { Player } from "./TRexRunner/Player.js";
import { Score } from "./TRexRunner/Score.js";

export class TRexGame extends GameEngine {

    static gamePlayScene: GamePlayScene;
    static gameOverScene: GameOverScene;
    static gameOpenScene: GameOpenScene;

    static control: Control;
    static score: number;
    static gameScore: Score;
    static high: number;
    static canvas: Canvas;
    static canvasRenderer: CanvasRenderer;
    static highScore: Score;
    static player: Player;
    static ground: Ground;
    static readonly imgUrl = "./img/200-offline-sprite.png";
    static isAlive: boolean = false;
    static localHighScore: String;
    static isStart: boolean = true;
    static lastTime: number;


    static ready() {
        TRexGame.control = new Control();
        TRexGame.control.handleInput();

        let el = document.querySelector("canvas") as HTMLCanvasElement
        TRexGame.canvas = new Canvas(1500, 600);
        TRexGame.canvas.create(el);
        TRexGame.canvasRenderer = new CanvasRenderer();

        TRexGame.player = new Player(TRexGame.imgUrl, 75, 0, 85, 100, 30, 200, 85, 100)

        TRexGame.score = 0;
        TRexGame.high = 0;
        TRexGame.gameScore = new Score("Score: " + TRexGame.score, 25, 25, "left", "black", "20")
        TRexGame.highScore = new Score("High Score: " + TRexGame.high, Canvas.width, 25, "right", "black", "20")

        TRexGame.ground = new Ground(TRexGame.imgUrl, 0, 100, 2300, 500, 0, 568, 2000, 500)

        TRexGame.gameOpenScene = new GameOpenScene();

        TRexGame.gameOverScene = new GameOverScene()
        TRexGame.gamePlayScene = new GamePlayScene()
        TRexGame.gamePlayScene.addObject(TRexGame.player)
        TRexGame.gamePlayScene.addObject(TRexGame.gameScore)
        TRexGame.gamePlayScene.addObject(TRexGame.highScore)
        TRexGame.gamePlayScene.addObject(TRexGame.ground)
    }

    static update() {

        let time = window.performance.now();
        let delta = window.performance.now() - TRexGame.lastTime;
        TRexGame.lastTime = time;
        

        Canvas.ctx.clearRect(0, 0, Canvas.width, Canvas.height);

        if (TRexGame.isStart) {
            TRexGame.canvasRenderer.render(TRexGame.gameOpenScene);
            if (Control.keys['Space']){
                TRexGame.isStart = false;
            }
        } else {
            if (TRexGame.isAlive) {
                TRexGame.score++;
                TRexGame.gameScore.text = "Score: " + TRexGame.score;
                TRexGame.gamePlayScene.update(time, delta);
                TRexGame.canvasRenderer.render(TRexGame.gamePlayScene);
                TRexGame.isAlive = GamePlayScene.isAlive;
                if (TRexGame.score > TRexGame.high) {
                    TRexGame.high = TRexGame.score;
                    TRexGame.highScore.text = "High Score: " + TRexGame.high;
                }
            } else {
                TRexGame.gameOverScene.update();
                GameOverScene.score = TRexGame.score;
                GameOverScene.high = TRexGame.high;

                TRexGame.canvasRenderer.render(TRexGame.gameOverScene);
                if (Control.keys['Space'] || Control.keys['Enter']) {
                    TRexGame.isAlive = true;
                    TRexGame.score = 0;
                    GamePlayScene.isAlive = true;
                }
            }
        }

        requestAnimationFrame(TRexGame.update);

    }

    static start() {

        TRexGame.ready();
        requestAnimationFrame(TRexGame.update);

    }

}

TRexGame.start()
