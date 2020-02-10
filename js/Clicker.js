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
		this.autoPoints = 0;
		this.cp = 0;
		this.clickPoints = this.autoPoints;
		//premium
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
		// this.totalScore = this.score + this.clickPoints + this.bonusPremiumPoints;
		// this.totalScoreSpan.textContent = this.totalScore;
	}

	addAutoClickPoints() {
		const t = setInterval(() => {
			this.clickPoints += this.autoPoints;
			this.displayAutoClick();
			this.addPremiumPoints();

			// if (!this.isClicked) {
			// 	clearInterval(t);
			// }
		}, 1000);
	}

	addPremiumPoints() {
		if (!this.clickPoints) return;

		if (this.clickPoints % 100 === 0) {
			this.bonusPremiumPoints += 500;
			this.displayBonus();
		}
	}
}
