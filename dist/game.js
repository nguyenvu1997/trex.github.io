import { Canvas } from "./GameEngine/Canvas.js";
import { GameEngine } from "./GameEngine/GameEngine.js";
import { Control } from "./TRexRunner/Control.js";
import { GameOpenScene } from "./TRexRunner/GameOpenScene.js";
import { GameOverScene } from "./TRexRunner/GameOverScene.js";
import { GamePlayScene } from "./TRexRunner/GamePlayScene.js";
// Create Canvas
Canvas.init(document.querySelector("canvas"));
let control = new Control();
control.handleInput();
// Build Game
let tRexGame = new GameEngine();
tRexGame.addScene(new GameOpenScene());
tRexGame.addScene(new GamePlayScene());
tRexGame.addScene(new GameOverScene());
tRexGame.loop();
