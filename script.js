// ------------------- Theme Toggle -------------------
const themeToggleDesktop = document.getElementById('theme-toggle');
const themeToggleMobile = document.getElementById('theme-toggle-mobile');
const body = document.body;

// Apply saved theme from localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  body.classList.add('dark-mode');
  if (themeToggleDesktop) themeToggleDesktop.checked = true;
  if (themeToggleMobile) themeToggleMobile.checked = true;
}

// Toggle theme function
function toggleTheme() {
  body.classList.toggle('dark-mode');
  const theme = body.classList.contains('dark-mode') ? 'dark' : 'light';
  localStorage.setItem('theme', theme);
}

// Event listeners for both toggles
if (themeToggleDesktop) themeToggleDesktop.addEventListener('change', toggleTheme);
if (themeToggleMobile) themeToggleMobile.addEventListener('change', toggleTheme);

// ------------------- Hamburger Menu -------------------
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// ------------------- Typewriter Effect -------------------
const text = "Karan Vaghela";
const element = document.getElementById("typewriter");
let index = 0;

function typeWriter() {
  if (index < text.length) {
    element.textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, 150);
  } else {
    element.classList.add("done"); // Stops blinking cursor if used
  }
}

window.addEventListener('load', typeWriter);

// ------------------- Landing Page Fade Out -------------------
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const landing = document.getElementById("landing");
    if (landing) landing.style.display = "none";
  }, 4000); // Fade out after 4s
});
