const fab = document.querySelector('.fab');
fab.addEventListener('click', () => {
  const nav = document.querySelector('.class-list');
  const verticalLine = document.getElementById('navVerticalLine');
  nav.style.display = nav.style.display === 'none' ? 'flex' : 'none';
  verticalLine.style.display = nav.style.display === 'none' ? 'block' : 'none';
});