// scripts.js

document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = document.getElementById('burgerMenu');
    const mobileNav = document.getElementById('mobileNav');
    const increaseFontSize = document.getElementById('increaseFontSize');
    const decreaseFontSize = document.getElementById('decreaseFontSize');
    const toggleContrast = document.getElementById('toggleContrast');
    const textToSpeech = document.getElementById('textToSpeech');
    const colorblindMode = document.getElementById('colorblindMode');
    const content = document.getElementById('content');
    let fontSize = 16;

    burgerMenu.addEventListener('click', function () {
        const expanded = burgerMenu.getAttribute('aria-expanded') === 'true' || false;
        burgerMenu.setAttribute('aria-expanded', !expanded);
        mobileNav.classList.toggle('active');
        burgerMenu.classList.toggle('active');
    });

    increaseFontSize.addEventListener('click', function () {
        fontSize += 2;
        content.style.fontSize = `${fontSize}px`;
    });

    decreaseFontSize.addEventListener('click', function () {
        if (fontSize > 12) {
            fontSize -= 2;
            content.style.fontSize = `${fontSize}px`;
        }
    });

    toggleContrast.addEventListener('click', function () {
        document.body.classList.toggle('high-contrast');
    });

    textToSpeech.addEventListener('click', function () {
        const isSpeaking = textToSpeech.getAttribute('data-speaking') === 'true';
        if (isSpeaking) {
            window.speechSynthesis.cancel();
            textToSpeech.setAttribute('data-speaking', 'false');
            textToSpeech.textContent = 'Text to Speech';
        } else {
            const text = content.innerText;
            const utterance = new SpeechSynthesisUtterance(text);
            window.speechSynthesis.speak(utterance);
            textToSpeech.setAttribute('data-speaking', 'true');
            textToSpeech.textContent = 'Stop Speech';
        }
    });

    colorblindMode.addEventListener('click', function () {
        document.body.classList.toggle('colorblind-mode');
    });
});
