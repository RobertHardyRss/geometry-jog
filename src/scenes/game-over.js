import { HEIGHT, WIDTH } from "../constants";

export class GameOver extends Phaser.Scene {
	constructor() {
		super({ key: "gameover" });
	}

	create() {
		this.centerWidth = WIDTH / 2;
		this.centerHeight = HEIGHT / 2;

		this.cameras.main.setBackgroundColor(0x87ceeb);
	}

	showLine(text, y, size) {
		const line = this.add
			.bitmapText(this.centerWidth, y, "arcade", size)
			.setOrigin(0.5) // place from center
			.setAlpha(0); // make transparent

        this.tweens.add({
            targets: line,
            duration: 2000,
            alpha: 
        });
	}
}
