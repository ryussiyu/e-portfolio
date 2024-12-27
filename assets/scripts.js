// JavaScript to manage dynamic content switching
function loadHomePage() {
    const dynamicContent = document.getElementById('dynamic-content');
    dynamicContent.innerHTML = `
        <h1 class="title">Hello!</h1>
        <p class="description">
            I'm Ru Xiu,<br>
            a passionate Creative Developer,<br>
            blending technology and artistry.<br><br>
            Explore my journey through <br>
            my projects and lomography.<br>
        </p>
        <a href="#" class="link-arrow" onclick="loadSection('projects')">Projects ></a>
    `;
}

function loadSection(section) {
    const dynamicContent = document.getElementById('dynamic-content');

    if (section === 'about') {
        dynamicContent.innerHTML = `
            <h1 class="title">About</h1>
            <p>
                I am currently a Computer Science student with a background in animation.
                My passion lies in blending art and technology to create meaningful digital experiences.
            </p>
        `;
    } else if (section === 'projects') {
        dynamicContent.innerHTML = `
            <h1 class="title">Projects</h1>
            <p>— Selected works</p>
            <div class="projects-grid">
                <div class="project-item">
                    <img src="assets/Japan_01.jpg" alt="Project 1">
                    <h3>Lomography Japan</h3>
                </div>
                <div class="project-item">
                    <img src="assets/Vietnam_01.jpg" alt="Project 2">
                    <h3>Lomography Vietnam</h3>
                </div>
                <div class="project-item">
                    <img src="assets/Japan_02.jpg" alt="Project 3">
                    <h3>Lomography Kyoto</h3>
                </div>
            </div>
        `;
    } else if (section === 'gallery') {
        dynamicContent.innerHTML = `
            <h1 class="title">Gallery</h1>
            <p>A curated collection of my lomography and digital experiments.</p>
        `;
    }
}
