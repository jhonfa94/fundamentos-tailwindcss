const html = document.documentElement;
const toogleThemeButton = document.getElementById("toogle-dark-mode");
const sunIcon = document.getElementById("sun-icon");
const moonIcon = document.getElementById("moon-icon");

// Se accede a las propiedades del systema operativo a traves del navegador para validar las preferencias. 
const matchMedia = window.matchMedia(
    "(prefers-color-scheme: dark)"
)

const systemDarkMode = matchMedia.matches;
// console.log('matchMedia: ', matchMedia);

/**
 * Funcion para validar el dark mode y replicar las funcionalidades
 * @param {} darkMode boolean
 */
const updateTheme = (darkMode) => {
    if (darkMode) {
        html.classList.add('dark')
        sunIcon.classList.add('hidden')
        moonIcon.classList.remove('hidden')
    } else {
        html.classList.remove('dark')
        sunIcon.classList.remove('hidden')
        moonIcon.classList.add('hidden')
    }
}

updateTheme(systemDarkMode)

toogleThemeButton.addEventListener('click', (e) => {
    // toggle dark class
    html.classList.toggle('dark')
    sunIcon.classList.toggle('hidden')
    moonIcon.classList.toggle('hidden')
})

//Evento que escucha el cambio del tema del systema operativo
matchMedia.addEventListener('change', ({ matches }) => {
    // console.log('Event match media: ', matches);
    updateTheme(matches)
})