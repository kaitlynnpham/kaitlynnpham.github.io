document.addEventListener('DOMContentLoaded', () => {
    const welcomeScreen = document.getElementById("introduction");
    const homepage = document.getElementById('homepage');
  
    // Show loader and welcome message initially
    welcomeScreen.style.display = 'flex';
  
    // Set up the first click to remove the loader
 setTimeout(() => {
      // After the first click, hide the welcome screen and show the homepage
      welcomeScreen.style.opacity = "0";
      setTimeout(() => {
        welcomeScreen.style.display = 'none';
        homepage.classList.add('visible');
    }, 1000);
 },3000);
});