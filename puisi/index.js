const particleContainer = document.getElementById('particles');
for (let i = 0; i < 40; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + 'vw';
    particle.style.top = '100%';
    particle.style.animationDuration = (3 + Math.random() * 5) + 's';
    particle.style.animationDelay = Math.random() * 5 + 's';
    particleContainer.appendChild(particle);
}