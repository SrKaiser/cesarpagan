document.addEventListener('DOMContentLoaded', () => {

  // Función para manejar el menú hamburguesa
  const toggleButton = document.querySelector('.menu-toggle');
  const navRight = document.querySelector('.navigation-right');
  const header = document.querySelector('.header');
  const navLinks = document.querySelectorAll('.navigation-right a');

  function handleMenuToggle() {
    toggleButton.addEventListener('click', () => {
      navRight.classList.toggle('active');
      header.classList.toggle('active');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navRight.classList.remove('active');
        header.classList.remove('active');
      });
    });
  }


  // Función para alternal el modo claro y oscuro
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
  const headerHeight = header.offsetHeight; 

  function handleSmoothScroll() {
    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        console.log(targetId);

        if (targetId === '#about-me') {
          const topPosition = targetSection.offsetTop + 200;
          window.scrollTo({
            top: topPosition,
            behavior: 'smooth'
          });
        } else if (targetSection) {
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

  // Función para manejar el formulario de contacto
  function handleContactForm() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault();

      const serviceID = 'default_service';
      const templateID = 'template_91xq21x';

      emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
          const alertBox = document.getElementById('alert-box');
          alertBox.classList.add('alert-visible');
          setTimeout(function() {
            alertBox.classList.remove('alert-visible');
            setTimeout(function() {
              alertBox.style.display = 'none';
            }, 500); 
          }, 5000);
        }, (err) => {
          alert(JSON.stringify(err));
        });
    });
  }

  // Ejecutar funciones
  handleMenuToggle();
  handleSmoothScroll();
  changeLinkState();
  handleContactForm();
  switchDarkLightMode();
});


