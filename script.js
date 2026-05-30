const menuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {

    menuBtn.classList.toggle('open');
    mobileMenu.classList.toggle('active');

});