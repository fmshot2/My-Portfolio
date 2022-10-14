const hamburger = document.querySelector('#clicktoggle');
const myHamburger = document.querySelector('.hamburger');
const navigate = document.querySelector('.navigate');
const headerItems = document.querySelector('.header-items');
const imgdiv = document.querySelector('.imgdiv');
const headerBrand = document.querySelector('.headerBrand');
const theProjects = document.querySelector('.projects');
const about = document.querySelector('.about');
const contact_me = document.querySelector('.contact-form');

const portfolio = document.querySelector('#portfolio');
portfolio.addEventListener('click', () => {
  const hamburger = document.querySelector('.hamburger');
  const headerItems = document.querySelector('.header-items');
  const imgdiv = document.querySelector('.imgdiv');
  const headerBrand = document.querySelector('.headerBrand');
  hamburger.classList.toggle('active');
  headerItems.classList.toggle('active');
  theProjects.classList.toggle('active');
  about.classList.toggle('active');
  contact_me.classList.toggle('active');


  imgdiv.classList.toggle('greyed_out');
  headerBrand.classList.toggle('greyed_out');
  theProjects.classList.toggle('greyed_out');
  about.classList.toggle('greyed_out');
  contact_me.classList.toggle('greyed_out');
});


projects.addEventListener('click', () => {
  myHamburger.classList.toggle('active');
  headerItems.classList.toggle('active');
  theProjects.classList.toggle('active');
  about.classList.toggle('active');
  contact.classList.toggle('active');

  imgdiv.classList.toggle('greyed_out');
  headerBrand.classList.toggle('greyed_out');
  theProjects.classList.toggle('greyed_out');
  about.classList.toggle('greyed_out');
  contact_me.classList.toggle('greyed_out');
});

aboutId.addEventListener('click', () => {
  myHamburger.classList.toggle('active');
  headerItems.classList.toggle('active');
  theProjects.classList.toggle('active');
  about.classList.toggle('active');
  contact.classList.toggle('active');


  imgdiv.classList.toggle('greyed_out');
  headerBrand.classList.toggle('greyed_out');
  theProjects.classList.toggle('greyed_out');
  about.classList.toggle('greyed_out');
  contact.classList.toggle('greyed_out');
});

contact.addEventListener('click', () => {
  myHamburger.classList.toggle('active');
  headerItems.classList.toggle('active');
  theProjects.classList.toggle('active');
  about.classList.toggle('active');
  contact_me.classList.toggle('active');

  imgdiv.classList.toggle('greyed_out');
  headerBrand.classList.toggle('greyed_out');
  theProjects.classList.toggle('greyed_out');
  about.classList.toggle('greyed_out');
  contact_me.classList.toggle('greyed_out');
});