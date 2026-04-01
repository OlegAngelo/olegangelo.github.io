document.addEventListener("DOMContentLoaded", () => {
	const openBtn = document.getElementById("open-rps-modal");
	const closeBtn = document.getElementById("close-rps-modal");
	const modal = document.getElementById("rps-modal");
	const result = document.getElementById("rps-result");
	const choiceButtons = document.querySelectorAll(".rps-choice");

	if (!openBtn || !closeBtn || !modal || !result || !choiceButtons.length) {
		return;
	}

	const openModal = () => {
		modal.classList.add("open");
		modal.setAttribute("aria-hidden", "false");
	};

	const closeModal = () => {
		modal.classList.remove("open");
		modal.setAttribute("aria-hidden", "true");
	};

	openBtn.addEventListener("click", openModal);
	closeBtn.addEventListener("click", closeModal);

	modal.addEventListener("click", (event) => {
		if (event.target === modal) {
			closeModal();
		}
	});

	document.addEventListener("keydown", (event) => {
		if (event.key === "Escape") {
			closeModal();
		}
	});

	choiceButtons.forEach((button) => {
		button.addEventListener("click", () => {
			const playerChoice = button.dataset.choice;
			const options = ["Rock", "Paper", "Scissors"];
			const randomIndex = Math.floor(Math.random() * options.length);
			const computerChoice = options[randomIndex];
			let gameResult = "";

			switch (playerChoice) {
				case "Rock":
					gameResult =
						computerChoice === "Scissors"
							? "You win"
							: computerChoice === "Rock"
								? "Draw"
								: "You lose";
					break;
				case "Paper":
					gameResult =
						computerChoice === "Rock"
							? "You win"
							: computerChoice === "Paper"
								? "Draw"
								: "You lose";
					break;
				case "Scissors":
					gameResult =
						computerChoice === "Paper"
							? "You win"
							: computerChoice === "Scissors"
								? "Draw"
								: "You lose";
					break;
				default:
					gameResult = "Try again";
			}

			result.textContent = `You: ${playerChoice} | Computer: ${computerChoice} - ${gameResult}`;
		});
	});
});
