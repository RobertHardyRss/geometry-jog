import { HEIGHT, WIDTH } from "../constants";
import { Player } from "../game-objects/player";
import { Generator } from "../generator";

export class GameScene extends Phaser.Scene {
	constructor() {
		super({ key: "game" });

		this.obstacles;
	}

	preload() {
		// this will get called by phaser
		// automatically when the scene loads
	}

	create() {
		// set background color
		this.cameras.main.setBackgroundColor(0x222222);

		this.obstacles = this.add.group();
		this.generator = new Generator(this);

		this.player = new Player(this, WIDTH / 2, HEIGHT / 2);

		this.physics.add.collider(
			this.player,
			this.obstacles,
			this.hitObstacle,
			() => {
				return true;
			},
			this
		);
	}

	update() {
		this.player.update();
	}

	hitObstacle(player, obstacle) {
		console.log("player hit");
	}
}
