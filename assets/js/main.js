
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

if (navToggle) {
    navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
    navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

const blurHeader = () => {
  const header = document.getElementById("header");
  this.scrollY >= 50
    ? header.classList.add("blur-header")
    : header.classList.remove("blur-header")
}
window.addEventListener('scroll', blurHeader)
var content = 'Desenvolvedor Front-End & Back-End em Asp .Net Core' ;
  var text = document.getElementById('text');
  
  var speed = 150;
  var cont = 0;
  
  function typeWriter () {
    if(cont < content.length){
      text.textContent += content.charAt(cont);
      cont++;
      setTimeout(typeWriter, speed);
    }else{
      text.textContent = '';
      cont = 0;
      typeWriter();
    }
  }
  
  typeWriter();
$(document).ready(function(){
  if(!$("#myCanvas").tagcanvas({
    textColour: "#08fdd8",
    outlineColour: "transparent",
    reverse: true,
    depth: 0.8,
    maxSpeed: 0.05,
    weight: true,
  }, "tags")){
    $("#myCanvasContainer");
  }
});

const scrollUp = () =>{
  const scrollUp = document.getElementById('scroll-up')
  this.scrollY >= 50 ? scrollUp.classList.add('show-scroll')
                     :scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
  const scrollY = window.pageYOffset

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 58,
          sectionId = current.getAttribute('id'),
          sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

          if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
          }else{
            sectionsClass.classList.remove('active-link')
          }
  })
}
window.addEventListener('scroll', scrollActive)
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
})

sr.reveal('.home__data, .home__social, .contact__container')
sr.reveal('.home__image', {origin: 'bottom'})
sr.reveal('.about__data, .skills__data, .footer__container ', {origin: 'left'})
sr.reveal('.about__image, .skills__content', {origin: 'right'})
sr.reveal('.projects__card', {interval: 100})
