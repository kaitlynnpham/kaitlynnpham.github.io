
window.onload = () => {
  const welcomeScreen = document.getElementById('introduction');
  const homepage = document.getElementById('homepage');

  const puzzles = [
    document.getElementById('puzzle1'),
    document.getElementById('puzzle2'),
    document.getElementById('puzzle4'),
    document.getElementById('puzzle3')

  ];


  welcomeScreen.style.display = 'flex';


  puzzles.forEach((tile, index) => {
    setTimeout(() => {
      tile.style.opacity = 1;
    }, index * 500);
  });
  setTimeout(() => {

    setTimeout(() => {
      welcomeScreen.style.display = 'none';
      homepage.style.display = 'block';
    }, 1500);
  }, puzzles.length * 500);
};
