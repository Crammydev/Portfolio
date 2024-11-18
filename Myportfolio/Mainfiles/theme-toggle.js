const themeButton = document.getElementById('themeButton');
const body = document.body;

themeButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Change button text based on theme
    if (body.classList.contains('dark-mode')) {
        themeButton.textContent = '☀️ Light Mode';
    } else {
        themeButton.textContent = '🌙 Dark Mode';
    }
});
