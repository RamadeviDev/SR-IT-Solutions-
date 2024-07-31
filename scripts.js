document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.getElementById('burgerMenu');
    const mobileNav = document.getElementById('mobileNav');

    burgerMenu.addEventListener('click', () => {
        const isExpanded = burgerMenu.getAttribute('aria-expanded') === 'true';
        burgerMenu.setAttribute('aria-expanded', !isExpanded);
        burgerMenu.classList.toggle('active');
        mobileNav.classList.toggle('active');
    });

    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    const serviceCards = document.querySelector('.service-cards');

    leftArrow.addEventListener('click', () => {
        serviceCards.scrollBy({
            left: -300,
            behavior: 'smooth'
        });
    });

    rightArrow.addEventListener('click', () => {
        serviceCards.scrollBy({
            left: 300,
            behavior: 'smooth'
        });
    });
});

function sendMail(event) {
    event.preventDefault();

    const serviceID = 'service_k5x9hdf';
    const templateID = 'template_ctyp7jl';

    emailjs.sendForm(serviceID, templateID, event.target)
        .then(() => {
            document.getElementById('contact-form').style.display = 'none';
            document.getElementById('thank-you').style.display = 'block';
        }, (err) => {
            alert('Send email failed!\r\n Response:\n ' + JSON.stringify(err));
        });
}
