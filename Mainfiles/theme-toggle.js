// theme-toggle.js
const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Change button text based on the mode
    if (document.body.classList.contains("dark-mode")) {
        themeButton.textContent = "🌞 Light Mode";
    } else {
        themeButton.textContent = "🌙 Dark Mode";
    }
});
document.addEventListener('mousemove', (e) => {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.left = `${e.pageX}px`;
    star.style.top = `${e.pageY}px`;

    document.body.appendChild(star);

    // Remove the star after the animation ends
    setTimeout(() => {
        star.remove();
    }, 1000);
});
