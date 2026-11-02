const themeToggleBtn = document.getElementById('theme-toggle');
const htmlElem = document.documentElement;

themeToggleBtn.addEventListener('click', () => {
    const currentTheme = htmlElem.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    htmlElem.setAttribute('data-theme', newTheme);
    themeToggleBtn.textContent = newTheme === 'light' ? 'Dark Mode' : 'Light Mode';
});
