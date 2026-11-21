
document.addEventListener("DOMContentLoaded", () => {

    const sections = document.querySelectorAll(
        ".intro, .about, .intrests"
    );

    // Make sure sections appear even if animations aren't supported
    if (!("IntersectionObserver" in window)) {
        sections.forEach(section => {
            section.classList.add("visible");
        });
        return;
    }

    const observer = new IntersectionObserver((entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("visible");

                // Stop observing after the animation
                observer.unobserve(entry.target);
            }

        });

    }, {
        threshold: 0.05,
        rootMargin: "0px 0px -30px 0px"
    });

    sections.forEach(section => {
        observer.observe(section);
    });

});
