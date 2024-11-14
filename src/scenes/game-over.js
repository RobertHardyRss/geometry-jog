import { HEIGHT, WIDTH } from "../constants";

export class GameOver extends Phaser.Scene {
	constructor() {
		super({ key: "gameover" });
	}

	create() {
		this.centerWidth = WIDTH / 2;
		this.centerHeight = HEIGHT / 2;

		this.cameras.main.setBackgroundColor(0x87ceeb);

		this.showLine(this.registry.get("score"), 50, 30);
		this.showLine("GAME OVER!", this.centerHeight, 45);
		this.showLine("Press ENTER to restart", HEIGHT - 50, 15);

		this.input.keyboard.on("keydown-ENTER", this.startGame, this);
	}

	showLine(text, y, size) {
		const line = this.add
			.bitmapText(this.centerWidth, y, "arcade", text, size)
			.setOrigin(0.5) // place from center
			.setAlpha(0); // make transparent

		this.tweens.add({
			targets: line,
			duration: 2000,
			alpha: { from: 0, to: 1 },
			repeat: 0,
		});
	}

	startGame() {
		this.scene.start("game");
	}
}
