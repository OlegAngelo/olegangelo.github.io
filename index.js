let counterEl = document.getElementById("counter");
let count = 5;

const clickMeTooltip = () => {
	if (count > 0) {
		counterEl.textContent = --count;

		if (count === 0) {
			window.location.href =
				"https://olegangelo.github.io/easter-egg/portfolio.mp4";
		}
	}
};

document.addEventListener("DOMContentLoaded", () => {
	// theme toggle
	const themeToggle = document.getElementById("theme-toggle");
	const savedTheme = localStorage.getItem("theme");

	const setTheme = (theme) => {
		document.body.classList.toggle("dark-mode", theme === "dark");
		themeToggle.textContent = theme === "dark" ? "Light" : "Dark";
		themeToggle.setAttribute(
			"aria-label",
			theme === "dark" ? "Switch to light mode" : "Switch to dark mode",
		);
	};

	setTheme(savedTheme === "dark" ? "dark" : "light");

	themeToggle.addEventListener("click", () => {
		const nextTheme = document.body.classList.contains("dark-mode")
			? "light"
			: "dark";
		setTheme(nextTheme);
		localStorage.setItem("theme", nextTheme);
	});

	// progress bar
	const progressBar = document.createElement("div");
	progressBar.id = "scroll-progress";
	document.body.appendChild(progressBar);

	const updateProgressBar = () => {
		const scrollTop = window.scrollY;
		const scrollHeight =
			document.documentElement.scrollHeight - window.innerHeight;
		const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
		progressBar.style.width = `${Math.min(progress, 100)}%`;
	};

	window.addEventListener("scroll", updateProgressBar, { passive: true });
	updateProgressBar();

	document.querySelectorAll('a[target="_blank"]').forEach((link) => {
		link.addEventListener("click", () => {
			link.classList.add("link-pop");
			setTimeout(() => link.classList.remove("link-pop"), 230);
		});
	});
});
