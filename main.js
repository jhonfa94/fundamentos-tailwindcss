const html = document.documentElement;
const toogleThemeButton = document.getElementById("toogle-dark-mode");
const sunIcon = document.getElementById("sun-icon");
const moonIcon = document.getElementById("moon-icon");


toogleThemeButton.addEventListener('click', (e) => {
    // toggle dark class
    html.classList.toggle('dark')
    sunIcon.classList.toggle('hidden')
    moonIcon.classList.toggle('hidden')

})