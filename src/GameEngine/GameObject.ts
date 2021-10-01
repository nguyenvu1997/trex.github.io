import { GameEngine } from "./GameEngine.js";
import { Scene } from "./Scene.js";

export class GameObject {

    x: number;
    y: number;
    width: number;
    height: number;

    scene: Scene;
    gameEngine: GameEngine;

    constructor(x: number, y: number, width: number, height: number) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    
}