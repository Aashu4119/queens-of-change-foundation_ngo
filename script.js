// Fade In Animation On Scroll

const fadeElements = document.querySelectorAll('.fade-in');

const showOnScroll = () => {

    fadeElements.forEach((element) => {

        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < window.innerHeight - 100) {
            element.classList.add('show');
        }
    });
};

window.addEventListener('scroll', showOnScroll);

showOnScroll();


// Join Button Interaction

const joinBtn = document.getElementById('joinBtn');

joinBtn.addEventListener('click', () => {
    alert('Thank you for showing interest in volunteering with us!');
});