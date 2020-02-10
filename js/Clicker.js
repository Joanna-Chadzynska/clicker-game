class Clicker {
	constructor(score = 0) {
		this.score = score;
		this.totalScore = 0;
		this.board = document.querySelector(".clicker");
		this.board.addEventListener("click", (e) => {
			e.preventDefault();
			this.increaseScore();
		});
		this.totalPoints = document.getElementById("total-points");
		this.autoClick = document.getElementById("points-per-second");
		this.bonus = document.getElementById("premium-points");
		this.totalScoreSpan = document.getElementById("total-score");
		this.showTotalScore = document.querySelector(".modal-body");
		this.endGameBtn = document.getElementById("finish-game");
		this.endGameBtn.addEventListener("click", this.stopGame.bind(this));
		this.reloadGame = document.getElementById("reload-game");
		this.reloadGame.addEventListener("click", this.playAgain.bind(this));
		this.isFinished = false;
		this.autoPoints = 0;

		this.clickPoints = this.autoPoints;
		this.bonusPremiumPoints = 0;
	}

	displayScore() {
		this.totalPoints.innerHTML = this.score;
	}

	displayAutoClick() {
		this.autoClick.textContent = this.clickPoints;
	}

	displayBonus() {
		this.bonus.textContent = this.bonusPremiumPoints;
	}

	increaseScore() {
		this.score++;
		if (this.score % 50 === 0) {
			this.autoPoints += 10;
		} else {
			this.displayAutoClick();
		}

		this.displayScore();
	}

	addAutoClickPoints() {
		const t = setInterval(() => {
			this.clickPoints += this.autoPoints;
			this.displayAutoClick();
			this.addPremiumPoints();

			if (this.isFinished) {
				clearInterval(t);
			}
		}, 1000);
		return t;
	}

	addPremiumPoints() {
		if (!this.clickPoints) return;

		if (this.clickPoints % 100 === 0) {
			this.bonusPremiumPoints += 500;
			this.displayBonus();
		}
	}

	displayTotalScore() {
		this.isFinished = !this.isFinished;
		this.totalScore =
			this.score + this.clickPoints + this.bonusPremiumPoints + this.autoPoints;
		this.showTotalScore.textContent = this.totalScore;
	}

	stopGame() {
		this.displayTotalScore();
	}

	playAgain() {
		window.location.reload();
	}
}
