////@ts-check
export class Player extends Phaser.GameObjects.Rectangle {
	constructor(gameScene, x, y) {
		super(gameScene, x, y, 32, 32, 0x00ff00);

		// set origin to middle of rectangle
		this.setOrigin(0.5);

		// add ourself to the scene
		this.scene.add.existing(this);

		// tell physics about ourself
		this.scene.physics.add.existing(this);
		this.body.collideWorldBounds = true;

		// set our initial scale
		this.setScale(1);

		this.scene.input.on("pointerdown", () => this.jump(), this);

		this.space = this.scene.input.keyboard.addKey(
			Phaser.Input.Keyboard.KeyCodes.SPACE
		);

		this.jumpTween = this.scene.tweens.add({
			targets: this,
			duration: 1000,
			repeat: -1,
			angle: { from: 0, to: 360 },
		});
	}

	update() {
		if (Phaser.Input.Keyboard.JustDown(this.space)) {
			this.jump();
		} else if (this.body.blocked.down) {
			// stop spinning and go flat
			this.jumpTween.pause();
			this.rotation = 0;
		}
	}

	jump() {
		if (!this.body.blocked.down) {
			// don't jump if we are not down
			return;
		}

		this.scene.sound.play("jump");
		this.body.setVelocityY(-350);
		this.jumpTween.restart();
	}
}
