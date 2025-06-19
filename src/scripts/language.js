// Objeto que contiene todas las traducciones
const translations = {
    // Sección Intro
    'name': {
        spanish: 'César Pagán',
        english: 'César Pagán'
    },
    'title': {
        spanish: 'Ingeniero de Software',
        english: 'Software Engineer'
    },
    'motto': {
        spanish: 'Pasión por la tecnología, compromiso con la excelencia.',
        english: 'Passion for technology, commitment to excellence.'
    },
    'cv-text': {
        spanish: 'Currículum',
        english: 'Resume'
    },
    
    // Navegación - Header
    'nav-home': {
        spanish: 'Inicio',
        english: 'Home'
    },
    'nav-about': {
        spanish: 'Sobre mí',
        english: 'About Me'
    },
    'nav-experience': {
        spanish: 'Experiencia',
        english: 'Experience'
    },
    'nav-projects': {
        spanish: 'Proyectos',
        english: 'Projects'
    },
    'nav-education': {
        spanish: 'Educación',
        english: 'Education'
    },
    'nav-contact': {
        spanish: 'Contacto',
        english: 'Contact'
    },
    
    // Sección About Me
    'about-title': {
        spanish: '¿Quién soy?',
        english: 'Who am I?'
    },
    'profile-greeting': {
        spanish: '¡Hola mundo!',
        english: 'Hello world!'
    },
    
    // Traducciones de highlight items
    'highlight-education': {
        spanish: 'Ing. Informático',
        english: 'Computer Engineer'
    },
    'highlight-web': {
        spanish: 'Desarrollo Web Full-Stack',
        english: 'Full-Stack Web Dev'
    },
    'highlight-mobile': {
        spanish: 'Desarrollo Móvil',
        english: 'Mobile Development'
    },
    
    // Declaración personal
    'statement-text': {
        spanish: '¡Hola! Me encanta construir cosas que viven en internet, desde sitios web hasta aplicaciones móviles. Mi objetivo es crear soluciones que sean tanto funcionales como atractivas. Aunque sigo aprendiendo cada día, estoy constantemente buscando nuevos retos que me permitan seguir creciendo como desarrollador.',
        english: 'Hi there! I love building things that live on the internet, from websites to mobile apps. My goal is to create solutions that are both functional and engaging. While I\'m still learning every day, I\'m constantly seeking new challenges that allow me to grow as a developer.'
    },
    
    // Habilidades
    'skills-title': {
        spanish: 'Habilidades esenciales',
        english: 'Soft Skills' 
    },
    'skill-1': {
        spanish: 'Proactividad',
        english: 'Proactivity'
    },
    'skill-2': {
        spanish: 'Trabajo en Equipo',
        english: 'Team Work'
    },
    'skill-3': {
        spanish: 'Aprendizaje',
        english: 'Learning'
    },
    'skill-4': {
        spanish: 'Comunicación',
        english: 'Communication'
    },
    'skill-5': {
        spanish: 'Adaptabilidad',
        english: 'Adaptability'
    },
    
    // Sección Experience
    'experience-title': {
        spanish: 'Experiencia',
        english: 'Experience'
    },
    
    // Sección Projects
    'projects-title': {
        spanish: 'Proyectos',
        english: 'Projects'
    },
    
    // Sección Education
    'education-title': {
        spanish: 'Educación',
        english: 'Education'
    },
    
    // Sección Contact
    'contact-title': {
        spanish: 'Contacto',
        english: 'Contact'
    },
    'contact-text': {
        spanish: '¿Interesado en conectar? Elige el método que prefieras:',
        english: 'Interested in connecting? Choose your preferred method:'
    },
    
    // Footer
    'footer-text': {
        spanish: '© 2025 César Pagán - Todos los derechos reservados.',
        english: '© 2024 César Pagán - All rights reserved.'
    }
};

// Variable para evitar actualizaciones redundantes
let isUpdating = false;

// Función para actualizar todos los elementos traducibles en la página
function updatePageContent(language) {
    // Evitar recursión infinita
    if (isUpdating) {
        return;
    }
    isUpdating = true;
    
    // Obtener todos los elementos que tienen atributos data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (key && translations[key] && translations[key][language]) {
            element.textContent = translations[key][language];
        }
    });
    
    // Aplicar traducciones por ID para elementos que no usan data-i18n
    Object.keys(translations).forEach(key => {
        const element = document.getElementById(key);
        if (element && translations[key][language]) {
            element.textContent = translations[key][language];
        }
    });
    
    // Actualizar atributos específicos si es necesario (por ejemplo, placeholders, títulos, etc.)
    document.querySelectorAll('[data-i18n-attr]').forEach(element => {
        const data = element.getAttribute('data-i18n-attr');
        if (data) {
            const parts = data.split(',');
            if (parts.length === 2) {
                const [attr, key] = parts;
                if (translations[key] && translations[key][language]) {
                    element.setAttribute(attr, translations[key][language]);
                }
            }
        }
    });
    
    // Actualizar visibilidad de los contenedores de idioma del switch
    const container1 = document.getElementById('language-container');
    const container2 = document.getElementById('language-container2');
    
    if (container1 && container2) {
        container1.style.display = language === 'spanish' ? 'flex' : 'none';
        container2.style.display = language === 'english' ? 'flex' : 'none';
    }
    
    // Guardar el idioma seleccionado en localStorage
    localStorage.setItem('language', language);
    
    // Establecer el idioma como atributo en el documento para posibles estilos CSS
    document.documentElement.setAttribute('data-language', language);
    
    isUpdating = false;
}

// Función para inicializar el idioma
function initializeLanguage() {
    // Obtener el idioma guardado o detectar el idioma del navegador
    let savedLanguage = localStorage.getItem('language');
    
    if (!savedLanguage) {
        const browserLanguage = navigator.language;
        savedLanguage = browserLanguage && browserLanguage.startsWith('es') ? 'spanish' : 'english';
        localStorage.setItem('language', savedLanguage);
    }
    
    // Aplicar las traducciones iniciales
    updatePageContent(savedLanguage);
}

// Escuchar el evento personalizado de cambio de idioma (solo para actualizar traducciones)
document.addEventListener('languageChanged', (event) => {
    // Verificamos que el evento tenga la estructura esperada y que no estemos ya actualizando
    if (event instanceof CustomEvent && event.detail && event.detail.language && !isUpdating) {
        updatePageContent(event.detail.language);
    }
});

// Inicializar el idioma cuando se cargue el DOM
document.addEventListener('DOMContentLoaded', initializeLanguage);

// Registrar manejadores para los botones de cambio de idioma
document.addEventListener('DOMContentLoaded', () => {
    const languageSwitchers = document.querySelectorAll('[id^="spanish-select"], [id^="english-select"]');
    
    languageSwitchers.forEach(element => {
        element.addEventListener('click', (event) => {
            const target = event.currentTarget;
            if (target instanceof HTMLElement) {
                const language = target.getAttribute('data-language');
                if (language) {
                    updatePageContent(language);
                    document.documentElement.setAttribute('data-language', language);
                    
                    // Disparar evento para que otros componentes se actualicen
                    document.dispatchEvent(new CustomEvent('languageChanged', { 
                        detail: { language } 
                    }));
                }
            }
        });
    });
});
