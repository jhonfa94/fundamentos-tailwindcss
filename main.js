const html = document.documentElement;

const icons = {
    light: document.getElementById("light-icon"),
    dark: document.getElementById("dark-icon"),
    system: document.getElementById("system-icon"),
};

const themeMenu = document.getElementById("theme-menu");
const themeOptions = document.querySelectorAll(
    "[data-theme-option]"
);
const isDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)"
);

let currentTheme =
    localStorage.getItem("theme") ||
    localStorage.setItem("theme", "system");

updateTheme(currentTheme);
updateThemeUI(currentTheme);

function updateThemeUI(theme) {
    Object.entries(icons).forEach(([key, icon]) =>
        key === theme
            ? icon.classList.remove("hidden")
            : icon.classList.add("hidden")
    );

    themeMenu.classList.add("hidden");
    localStorage.setItem("theme", theme);
}
function updateTheme(theme) {
    if (
        theme === "dark" ||
        (theme === "system" && isDarkMode.matches)
    ) {
        html.classList.add("dark");
    } else if (
        theme === "light" ||
        (theme === "system" && !isDarkMode.matches)
    ) {
        html.classList.remove("dark");
    }
    currentTheme = theme;
}
isDarkMode.addEventListener("change", ({ matches }) => {
    if (currentTheme === "system") {
        matches
            ? html.classList.add("dark")
            : html.classList.remove("dark");
    }
});

themeOptions.forEach((option) => {
    option.addEventListener("click", () => {
        const theme = option.dataset.themeOption;

        updateThemeUI(theme);
        updateTheme(theme);
    });
});

document
    .getElementById("toggle-theme-menu")
    .addEventListener("click", () =>
        themeMenu.classList.toggle("hidden")
    );

// const systemDarkMode = matchMedia.matches;

// updateTheme(systemDarkMode);

// toggleThemeButton.addEventListener("click", () => {
//   html.classList.toggle("dark");
//   sunIcon.classList.toggle("hidden");
//   moonIcon.classList.toggle("hidden");
// });