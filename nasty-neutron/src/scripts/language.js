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

function setLanguage(language) {
    if (language === 'english') {
        introSection(language);

        headerSection(language);

        aboutMeSection(language);

        document.getElementById('language-container').style.display = 'none';
        document.getElementById('language-container2').style.display = 'flex';

    } else if (language === 'spanish') {
        introSection(language);

        headerSection(language);

        aboutMeSection(language);

        document.getElementById('language-container').style.display = 'flex';
        document.getElementById('language-container2').style.display = 'none';
    }

    addLanguageEventListeners();
}


function addLanguageEventListeners() {
    document.getElementById('english-select').addEventListener('click', function() {
        setLanguage('english');
    });
    document.getElementById('spanish-select').addEventListener('click', function() {
        setLanguage('spanish');
    });
}

addLanguageEventListeners();

function introSection(language){
    if (language === 'spanish'){
        document.getElementById('name').textContent = 'César Pagán';
        document.getElementById('title').textContent = 'Ingeniero de Software';
        document.getElementById('motto').textContent = 'Pasión por la tecnología, compromiso con la excelencia.';
    } else {
        document.getElementById('name').textContent = 'César Pagán';
        document.getElementById('title').textContent = 'Software Engineer';
        document.getElementById('motto').textContent = 'Passion for technology, commitment to excellence.';
    }
}

function headerSection(language){
    if (language === 'spanish'){
        document.getElementById('link-home').textContent = 'Inicio';
        document.getElementById('link-about').textContent = 'Sobre mí';
        document.getElementById('link-experience').textContent = 'Experiencia';
        document.getElementById('link-projects').textContent = 'Proyectos';
        document.getElementById('link-education').textContent = 'Educación';
        document.getElementById('link-contact').textContent = 'Contacto';
    } else {
        document.getElementById('link-home').textContent = 'Home';
        document.getElementById('link-about').textContent = 'About Me';
        document.getElementById('link-experience').textContent = 'Experience';
        document.getElementById('link-projects').textContent = 'Projects';
        document.getElementById('link-education').textContent = 'Education';
        document.getElementById('link-contact').textContent = 'Contact';
    }
}

function aboutMeSection(language){
    if (language === 'spanish'){
        document.getElementById('about-title').textContent = 'Sobre mí';
        document.getElementById('about-text1').textContent = 'Soy un Ingeniero Informático con especialización en Desarrollo de Software, llevando casi un año de experiencia en Desarrollo Web Full-Stack y de Aplicaciones Móviles. Mi curiosidad me lleva a explorar las últimas tendencias y tecnologías, siempre buscando ampliar mis horizontes y superar nuevos retos.';
        document.getElementById('about-text2').textContent = 'Mi pasión por la innovación y la calidad en el desarrollo de software me motiva a entregar soluciones que no solo satisfacen las necesidades, sino que también ofrecen experiencias excepcionales a los usuarios. Estoy comprometido con el aprendizaje continuo y el crecimiento profesional, con el objetivo de estar siempre al frente en esta industria de rápido avance.';
        document.getElementById('skills-title').textContent = 'Habilidades esenciales';

        document.getElementById('skill-1').textContent = 'Proactividad';
        document.getElementById('skill-2').textContent = 'Trabajo en Equipo';
        document.getElementById('skill-3').textContent = 'Aprendizaje';
        document.getElementById('skill-4').textContent = 'Comunicación';
        document.getElementById('skill-5').textContent = 'Adaptabilidad';
    } else {
        document.getElementById('about-title').textContent = 'About Me';
        document.getElementById('about-text1').textContent = 'I am a Computer Engineer specializing in Software Development, with nearly a year of experience in Full-Stack Web Development and Mobile Applications. My curiosity drives me to explore the latest trends and technologies, always seeking to broaden my horizons and overcome new challenges.';
        document.getElementById('about-text2').textContent = 'My passion for innovation and quality in software development drives me to deliver solutions that not only meet needs but also provide exceptional experiences to users. I am committed to continuous learning and professional growth, aiming to always stay ahead in this rapidly advancing industry.';
        document.getElementById('skills-title').textContent = 'Soft Skills';

        document.getElementById('skill-1').textContent = 'Proactivity';
        document.getElementById('skill-2').textContent = 'Team Work';
        document.getElementById('skill-3').textContent = 'Learning';
        document.getElementById('skill-4').textContent = 'Comunication';
        document.getElementById('skill-5').textContent = 'Adaptability';
    }

}