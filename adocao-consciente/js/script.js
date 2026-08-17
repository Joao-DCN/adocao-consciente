const themeToggleBtn = document.getElementById('theme-toggle');

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  document.body.classList.add('dark-mode');
  themeToggleBtn.textContent = '☀️';
}

themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  
  const isDarkMode = document.body.classList.contains('dark-mode');
  
  themeToggleBtn.textContent = isDarkMode ? '☀️' : '🌙';
  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
});

const favoriteButtons = document.querySelectorAll('.favorite-btn');

favoriteButtons.forEach(button => {
  button.addEventListener('click', () => {
    button.classList.toggle('active');
    
    if (button.classList.contains('active')) {
      button.textContent = '♥';
    } else {
      button.textContent = '♡';
    }
  });
});