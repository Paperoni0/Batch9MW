function toggleNav() {
        const nav = document.querySelector('.class-list');
        const verticalLine = document.getElementById('navVerticalLine');
        nav.style.display = nav.style.display === 'none' ? 'block' : 'none';
        verticalLine.style.display = nav.style.display === 'none' ? 'block' : 'none';
      }