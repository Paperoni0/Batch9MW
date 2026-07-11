function toggleNav() {
    const nav = document.querySelector('.class-list');
    const verticalLine = document.getElementById('navVerticalLine');
    nav.style.display = nav.style.display === 'none' ? 'block' : 'none';
    verticalLine.style.display = nav.style.display === 'none' ? 'block' : 'none';
}

document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('contextmenu', event => event.preventDefault());
    window.oncontextmenu = (event) => {
        event.preventDefault();
        event.stopPropagation();
        return false;
    };
});