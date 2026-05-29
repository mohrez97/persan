const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {

  if(window.scrollY > 100){
    navbar.style.background = 'rgba(0,0,0,0.75)';
  }else{
    navbar.style.background = 'rgba(0,0,0,0.15)';
  }

});