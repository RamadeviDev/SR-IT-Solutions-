document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', () => {
            const isExpanded = item.getAttribute('aria-expanded') === 'true';
            item.setAttribute('aria-expanded', !isExpanded);
        });
    });

    const burgerMenu = document.getElementById('burgerMenu');
    const mobileNav = document.getElementById('mobileNav');

    burgerMenu.addEventListener('click', () => {
        const isExpanded = burgerMenu.getAttribute('aria-expanded') === 'true';
        burgerMenu.setAttribute('aria-expanded', !isExpanded);
        burgerMenu.classList.toggle('active');
        mobileNav.classList.toggle('active');
    });
});
