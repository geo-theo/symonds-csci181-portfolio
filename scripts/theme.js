const themeToggleButton = document.querySelector("#theme-toggle");

const sunIcon = `
  <svg class="theme-toggle-icon" viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="4"></circle>
    <path d="M12 2v2"></path>
    <path d="M12 20v2"></path>
    <path d="m4.93 4.93 1.41 1.41"></path>
    <path d="m17.66 17.66 1.41 1.41"></path>
    <path d="M2 12h2"></path>
    <path d="M20 12h2"></path>
    <path d="m6.34 17.66-1.41 1.41"></path>
    <path d="m19.07 4.93-1.41 1.41"></path>
  </svg>
`;

const moonIcon = `
  <svg class="theme-toggle-icon" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M21 14.5A8.5 8.5 0 0 1 9.5 3a7 7 0 1 0 11.5 11.5Z"></path>
  </svg>
`;

function updateThemeToggleText() {
  if (document.body.classList.contains("dark")) {
    themeToggleButton.innerHTML = sunIcon + "<span>Light</span>";
    themeToggleButton.setAttribute("aria-label", "Switch to light mode");
    themeToggleButton.setAttribute("title", "Switch to light mode");
  } else {
    themeToggleButton.innerHTML = moonIcon + "<span>Dark</span>";
    themeToggleButton.setAttribute("aria-label", "Switch to dark mode");
    themeToggleButton.setAttribute("title", "Switch to dark mode");
  }
}

themeToggleButton.addEventListener("click", function () {
  document.body.classList.toggle("dark");
  updateThemeToggleText();
});

updateThemeToggleText();
