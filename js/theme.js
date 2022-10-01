"use strict";

function setTheme(themeName) {
	localStorage.setItem("theme", themeName);

	document.documentElement.className = themeName === "dark" ? "dark-mode" : "light-mode";
}

function setUserPreference() {
	const theme = localStorage.getItem("theme");
	if (theme) return setTheme(theme);

	const doesUserPreferDarkMode = window.matchMedia(["(prefers-color-scheme: dark)"]).matches;

	doesUserPreferDarkMode ? setTheme("dark") : setTheme("light");
}

function toggleTheme() {
	const currentTheme = localStorage.getItem("theme");

	const themeToSet = currentTheme === "dark" ? "light" : "dark";

	setTheme(themeToSet);
}

window.addEventListener('load', function() {
	setUserPreference();
	
	const toggleThemeBtn = document.querySelector(".toggle-theme-btn");

	toggleThemeBtn && toggleThemeBtn.addEventListener("click", toggleTheme);
})
