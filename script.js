const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
    });
}

navSlide();

// Scroll animation for sections
const sections = document.querySelectorAll('section');

const checkSectionVisibility = () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionBottom = section.getBoundingClientRect().bottom;
        const viewportHeight = window.innerHeight;

        if (sectionTop < viewportHeight * 0.75 && sectionBottom > viewportHeight * 0.25) {
            section.classList.add('active-section');
        } else {
            section.classList.remove('active-section');
        }
    });
};

window.addEventListener('scroll', checkSectionVisibility);
window.addEventListener('resize', checkSectionVisibility);

// Initial check on load
checkSectionVisibility();