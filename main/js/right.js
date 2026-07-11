document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('contextmenu', event => event.preventDefault());
    window.oncontextmenu = (event) => {
        event.preventDefault();
        event.stopPropagation();
        return false;
    };
});