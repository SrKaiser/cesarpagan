document.querySelector('.language-switch').addEventListener('click', function(event) {
    event.stopPropagation(); // Evita que el evento se propague más allá del switch de idiomas
    toggleLanguagesDisplay();
});

function toggleLanguagesDisplay() {
    let containers = document.querySelectorAll('.languages');
    containers.forEach(container => {
        if (container.style.display === 'flex') {
            container.style.display = 'none';
        } else {
            container.style.display = 'flex';
        }
    });
}

document.getElementById('english-select').addEventListener('click', function(event) {
    event.stopPropagation(); // Previene la propagación del evento al toggle de despliegue
    setLanguage('english');
});

document.getElementById('english-select2').addEventListener('click', function(event) {
    event.stopPropagation(); // Previene la propagación del evento al toggle de despliegue
    setLanguage('english');
});

document.getElementById('spanish-select').addEventListener('click', function(event) {
    event.stopPropagation(); // Previene la propagación del evento al toggle de despliegue
    setLanguage('spanish');
});

document.getElementById('spanish-select2').addEventListener('click', function(event) {
    event.stopPropagation(); // Previene la propagación del evento al toggle de despliegue
    setLanguage('spanish');
});




let currentLanguage = localStorage.getItem('language') || 'spanish';

function setLanguage(language) {
    localStorage.setItem('language', language);

    document.getElementById('language-container').style.display = language === 'spanish' ? 'flex' : 'none';
    document.getElementById('language-container2').style.display = language === 'english' ? 'flex' : 'none';

    if (!window.location.search.includes(`lang=${language}`)) {
        window.location.search = `?lang=${language}`;
    }
}
