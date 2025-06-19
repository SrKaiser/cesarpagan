document.addEventListener('DOMContentLoaded', () => {

  // Función para manejar el menú hamburguesa
  const toggleButton = document.querySelector('.menu-toggle');
  const navRight = document.querySelector('.navigation-right');
  const header = document.querySelector('.header');
  const navLinks = document.querySelectorAll('.navigation-right a');

  // Función para agregar eventos táctiles y de clic
  function addTouchAndClickEvent(element, callback) {
    if (!element) return;
    
    let touchStartTime = 0;
    let touchEndTime = 0;
    
    // Eventos táctiles para móviles
    element.addEventListener('touchstart', (e) => {
      touchStartTime = Date.now();
    }, { passive: true });
    
    element.addEventListener('touchend', (e) => {
      touchEndTime = Date.now();
      // Solo ejecutar si el toque fue rápido (menos de 300ms)
      if (touchEndTime - touchStartTime < 300) {
        e.preventDefault();
        callback(e);
      }
    }, { passive: false });
    
    // Evento de clic para dispositivos no táctiles
    element.addEventListener('click', (e) => {
      // Evitar doble ejecución en dispositivos táctiles
      if (touchEndTime === 0 || Date.now() - touchEndTime > 100) {
        callback(e);
      }
    });
  }

  function handleMenuToggle() {
    addTouchAndClickEvent(toggleButton, () => {
      navRight.classList.toggle('active');
      header.classList.toggle('active');
    });

    navLinks.forEach(link => {
      addTouchAndClickEvent(link, () => {
        navRight.classList.remove('active');
        header.classList.remove('active');
      });
    });
  }

  // Función para alternar el modo claro y oscuro
  const switchControl = document.querySelector('.ui-switch input[type="checkbox"]');
  const html = document.documentElement;

  function switchDarkLightMode(){
  
      html.setAttribute('data-theme', 'dark');
      switchControl.checked = false;
  
      switchControl.addEventListener('change', () => {
          if (switchControl.checked) {
              html.setAttribute('data-theme', 'light');
          } else {
              html.setAttribute('data-theme', 'dark');
          }
      });
  }

  // Función para el desplazamiento suave y ajustado a secciones
  function handleSmoothScroll() {
    navLinks.forEach(link => {
      addTouchAndClickEvent(link, (e) => {
        e.preventDefault();
        const targetElement = e.currentTarget;
        const targetId = targetElement.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetId === '#about-me') {
          const topPosition = targetSection.offsetTop + 200;
          window.scrollTo({
            top: topPosition,
            behavior: 'smooth'
          });
        } else if (targetSection) {
          const headerHeight = header.offsetHeight;
          const topPosition = targetSection.offsetTop - headerHeight - 50;
          window.scrollTo({
            top: topPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  // Función para cambiar el estado activo de los enlaces al hacer scroll
  const sections = Array.from(navLinks).map(link => document.querySelector(link.getAttribute('href')));

  function changeLinkState() {
    function updateActiveLink() {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      let index = sections.findIndex((section, idx) => {
        if (!section) return false;
        const rect = section.getBoundingClientRect();
        const nextRect = sections[idx + 1] ? sections[idx + 1].getBoundingClientRect() : null;
        return (rect.top + window.scrollY <= scrollPosition) && (!nextRect || nextRect.top + window.scrollY > scrollPosition);
      });

      navLinks.forEach(link => link.classList.remove('active-link'));
      if (index !== -1 && navLinks[index]) {
        navLinks[index].classList.add('active-link');
      }
    }

    updateActiveLink();
    window.addEventListener('scroll', updateActiveLink);
  }

  // Ejecutar funciones
  handleMenuToggle();
  handleSmoothScroll();
  changeLinkState();
  switchDarkLightMode();
});


