document.addEventListener('DOMContentLoaded', (event) => {
  const toggleButton = document.querySelector('.menu-toggle');
  const navRight = document.querySelector('.navigation-right');
  const header = document.querySelector('.header');
  const navLinks = document.querySelectorAll('.navigation-right a'); 


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

});


const btn = document.getElementById('form-button');

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