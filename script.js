// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.padding = '15px 5%';
        header.style.background = 'rgba(10, 11, 18, 0.95)';
    } else {
        header.style.padding = '30px 5%';
        header.style.background = 'rgba(10, 11, 18, 0.8)';
    }
});

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// App Card Hover Particle Effect (Simplified)
const cards = document.querySelectorAll('.app-card');
cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.borderColor = 'rgba(255, 255, 255, 0.4)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.borderColor = 'rgba(255, 255, 255, 0.1)';
    });
});
