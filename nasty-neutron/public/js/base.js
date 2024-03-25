document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    const headerHeight = header.offsetHeight;

    window.onscroll = () => {
        if (window.scrollY > headerHeight) {
            header.classList.add('header-fixed');
        } else {
            header.classList.remove('header-fixed');
        }
    };
});
