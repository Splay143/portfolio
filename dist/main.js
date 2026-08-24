"use strict";
const sections = document.querySelectorAll(".content-section");
if (sections.length === 0) {
    console.warn("No content sections found for scroll animation.");
}
else {
    const sectionObserver = new IntersectionObserver((entries) => {
        for (const entry of entries) {
            if (!entry.isIntersecting) {
                continue;
            }
            const section = entry.target;
            section.classList.add("is-visible");
            sectionObserver.unobserve(section);
        }
    }, {
        threshold: 0.2
    });
    for (const section of sections) {
        sectionObserver.observe(section);
    }
}
