document.getElementById('english-select').addEventListener('click', function() {
    setLanguage('english');
});

document.getElementById('english-select2').addEventListener('click', function() {
    setLanguage('english');
});

document.getElementById('spanish-select').addEventListener('click', function() {
    setLanguage('spanish');
});

document.getElementById('spanish-select2').addEventListener('click', function() {
    setLanguage('spanish');
});

let currentLanguage = localStorage.getItem('language') || 'spanish';

setLanguage(currentLanguage);

function setLanguage(language) {
    const languagePrefix = language === 'spanish' ? 'es' : 'en';
    history.pushState({ path: `/${languagePrefix}/` }, '', `/${languagePrefix}/`);

    currentLanguage = language;
    localStorage.setItem('language', language);

    introSection(language);
    headerSection(language);
    aboutMeSection(language);
    experienceSection(language);
    projectSection(language);
    educationSection(language);
    contactSection(language);
    footerSection(language);

    document.getElementById('language-container').style.display = language === 'spanish' ? 'flex' : 'none';
    document.getElementById('language-container2').style.display = language === 'english' ? 'flex' : 'none';
}

window.addEventListener('popstate', function (event) {
    if (event.state && event.state.path) {
        setLanguage(event.state.path.includes('/en/') ? 'english' : 'spanish');
    }
});

function introSection(language){
    document.getElementById('name').textContent = 'César Pagán';
    document.getElementById('title').textContent = language === 'spanish' ? 'Ingeniero de Software' : 'Software Engineer';
    document.getElementById('motto').textContent = language === 'spanish' ? 'Pasión por la tecnología, compromiso con la excelencia.' : 'Passion for technology, commitment to excellence.';
}

function headerSection(language){
    document.getElementById('link-home').textContent = language === 'spanish' ? 'Inicio' : 'Home';
    document.getElementById('link-about').textContent = language === 'spanish' ? 'Sobre mí' : 'About Me';
    document.getElementById('link-experience').textContent = language === 'spanish' ? 'Experiencia' : 'Experience';
    document.getElementById('link-projects').textContent = language === 'spanish' ? 'Proyectos' : 'Projects';
    document.getElementById('link-education').textContent = language === 'spanish' ? 'Educación' : 'Education';
    document.getElementById('link-contact').textContent = language === 'spanish' ? 'Contacto' : 'Contact';
}

function aboutMeSection(language){
    document.getElementById('about-title').textContent = language === 'spanish' ? 'Sobre mí' : 'About Me';
    document.getElementById('about-text1').textContent = language === 'spanish' ? 'Soy un Ingeniero Informático con especialización en Desarrollo de Software, llevando casi un año de experiencia en Desarrollo Web Full-Stack y de Aplicaciones Móviles. Mi curiosidad me lleva a explorar las últimas tendencias y tecnologías, siempre buscando ampliar mis horizontes y superar nuevos retos.' : 'I am a Computer Engineer specializing in Software Development, with nearly a year of experience in Full-Stack Web Development and Mobile Applications. My curiosity drives me to explore the latest trends and technologies, always seeking to broaden my horizons and overcome new challenges.';
    document.getElementById('about-text2').textContent = language === 'spanish' ? 'Mi pasión por la innovación y la calidad en el desarrollo de software me motiva a entregar soluciones que no solo satisfacen las necesidades, sino que también ofrecen experiencias excepcionales a los usuarios. Estoy comprometido con el aprendizaje continuo y el crecimiento profesional, con el objetivo de estar siempre al frente en esta industria de rápido avance.' : 'My passion for innovation and quality in software development drives me to deliver solutions that not only meet needs but also provide exceptional experiences to users. I am committed to continuous learning and professional growth, aiming to always stay ahead in this rapidly advancing industry.';
    document.getElementById('skills-title').textContent = language === 'spanish' ? 'Habilidades esenciales' : 'Soft Skills';

    document.getElementById('skill-1').textContent = language === 'spanish' ? 'Proactividad' : 'Proactivity';
    document.getElementById('skill-2').textContent = language === 'spanish' ? 'Trabajo en Equipo' : 'Team Work';
    document.getElementById('skill-3').textContent = language === 'spanish' ? 'Aprendizaje' : 'Learning';
    document.getElementById('skill-4').textContent = language === 'spanish' ? 'Comunicación' : 'Comunication';
    document.getElementById('skill-5').textContent = language === 'spanish' ? 'Adaptabilidad' : 'Adaptability';
}

function experienceSection(language){
    document.getElementById('experience-title').textContent = language === 'spanish' ? 'Experiencia' : 'Experience';
}

function projectSection(language){
    document.getElementById('project-title').textContent = language === 'spanish' ? 'Proyectos' : 'Projects';
}

function educationSection(language){
    document.getElementById('education-title').textContent = language === 'spanish' ? 'Educación' : 'Education';
}

function contactSection(language){
    document.getElementById('contact-title').textContent = language === 'spanish' ? 'Contacto' : 'Contact';
    document.getElementById('contact-text').textContent = language === 'spanish' ? 'En la actualidad, me encuentro plenamente satisfecho con mi posición laboral, sin embargo, permanezco abierto a explorar diversas propuestas freelance o vacantes de empleo. Para contactarme, puedes hacerlo utilizando el formulario que se encuentra aquí abajo, o bien, a través de mi perfil de LinkedIn.' : 'Currently, I am fully satisfied with my job position, however, I remain open to explore various freelance proposals or job openings. To contact me, you can do so using the form below, or through my LinkedIn profile.';
    document.getElementById('form-name').textContent = language === 'spanish' ? 'Nombre' : 'Name';
    document.getElementById('form-message').textContent = language === 'spanish' ? 'Mensaje' : 'Message';
    document.getElementById('form-button').textContent = language === 'spanish' ? 'Enviar' : 'Send';
    document.getElementById('alert-text').textContent = language === 'spanish' ? '¡Email enviado con éxito!' : 'Email sent successfully!';
}

function footerSection(language){
    document.getElementById('footer-text').textContent = language === 'spanish' ? '© 2024 César Pagán - Todos los derechos reservados.' : '© 2024 César Pagán - All rights reserved.';
}