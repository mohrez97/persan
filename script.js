const menuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {

    menuBtn.classList.toggle('open');
    mobileMenu.classList.toggle('active');

});

const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add('active');
        }
    });
},{
    threshold:0.15
});

reveals.forEach(el=>observer.observe(el));