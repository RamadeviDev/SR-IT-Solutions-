document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.getElementById('burgerMenu');
    const mobileNav = document.getElementById('mobileNav');

    burgerMenu.addEventListener('click', () => {
        const expanded = burgerMenu.getAttribute('aria-expanded') === 'true' || false;
        burgerMenu.setAttribute('aria-expanded', !expanded);
        mobileNav.classList.toggle('active');
        burgerMenu.classList.toggle('active');
    });
});
