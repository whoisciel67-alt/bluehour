// Reveal sections smoothly when scrolling
const sections = document.querySelectorAll(
    '.intro, .about, .interests'
    );

const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.15 });

sections.forEach(section => observer.observe(section));
