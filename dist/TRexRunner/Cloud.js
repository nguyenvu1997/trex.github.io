import { GameImg } from "../GameEngine/GameImg.js";
export class Cloud extends GameImg {
    update() {
        this.x -= 3;
    }
}
