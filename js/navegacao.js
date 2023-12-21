function navigateToSection(sectionId) {

    const section = document.getElementById(sectionId);
    const yOffset = -120;
    
    if (section) {
        window.scrollTo({
        top: section.offsetTop + yOffset,
        behavior: "smooth"
        });
    }
}