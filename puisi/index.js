function toggleNav() {
    const nav = document.querySelector('.class-list');
    const verticalLine = document.getElementById('navVerticalLine');
    nav.style.display = nav.style.display === 'none' ? 'block' : 'none';
    verticalLine.style.display = nav.style.display === 'none' ? 'block' : 'none';
}

const particleContainer = document.getElementById('particle');
for (let i = 0; i < 40; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + 'vw';
    particle.style.animationDuration = (3 + Math.random() * 5) + 's';
    particle.style.animationDelay = Math.random() * 5 + 's';
    particleContainer.appendChild(p);
}