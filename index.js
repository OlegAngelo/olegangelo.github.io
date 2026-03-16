let counterEl = document.getElementById("counter");
let count = 5;

function clickMeTooltip() {
	counterEl.textContent = --count;

	if (count === 0) {
		window.location.href =
			"https://olegangelo.github.io/easter-egg/portfolio.mp4";
	}
}
