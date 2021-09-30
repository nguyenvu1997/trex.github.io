export class Control {
    handleInput() {
        document.addEventListener('keydown', function (evt) {
            Control.keys[evt.code] = true;
        });
        document.addEventListener('keyup', function (evt) {
            Control.keys[evt.code] = false;
        });
    }
}
Control.keys = {};
