document.addEventListener("DOMContentLoaded", () => {
    const homeLink = document.getElementById("home-link");
    const aboutLink = document.getElementById("about-link");
    const projectsLink = document.getElementById("projects-link");
    const galleryLink = document.getElementById("gallery-link");
    const dynamicContent = document.getElementById("dynamic-content");

    // Load different content for each section
    aboutLink.addEventListener("click", () => {
        dynamicContent.innerHTML = `
            <h1>About</h1>
            <p>I'm Ru Xiu, a creative developer passionate about blending technology and artistry.</p>
        `;
    });

    projectsLink.addEventListener("click", () => {
        dynamicContent.innerHTML = `
            <h1>Projects</h1>
            <p>Explore my projects that combine creativity and technical expertise, from web development to lomography.</p>
        `;
    });

    galleryLink.addEventListener("click", () => {
        dynamicContent.innerHTML = `
            <h1>Gallery</h1>
            <p>Check out my lomography and visual storytelling collection.</p>
        `;
    });

    homeLink.addEventListener("click", () => {
        dynamicContent.innerHTML = `
            <h1 class="main-heading">Hello!</h1>
            <p class="main-description">
                <strong><em>I'm Ru Xiu,</em></strong><br>
                <strong><em>a passionate Creative Developer,</em></strong><br>
                <strong><em>blending technology and artistry.</em></strong><br><br>
                <strong><em>Explore my journey through</em></strong><br>
                <strong><em>my projects and lomography.</em></strong>
            </p>
            <a href="#" id="projects-link-btn" class="btn">Projects &gt;</a>
        `;
    });
});
