const hamburger = document.querySelector('#clicktoggle');
hamburger.addEventListener('click', () => {
  const hamburger = document.querySelector('.hamburger');
  const navigate = document.querySelector('.navigate');
  const headerItems = document.querySelector('.header-items');
  const imgdiv = document.querySelector('.imgdiv');
  const headerBrand = document.querySelector('.headerBrand');
  hamburger.classList.toggle('active');
  headerItems.classList.toggle('active');
  imgdiv.classList.toggle('greyed_out');
  headerBrand.classList.toggle('greyed_out');
});

const projects = document.querySelector('#portfolio');
projects.addEventListener('click', () => {
  const hamburger = document.querySelector('.hamburger');
  const headerItems = document.querySelector('.header-items');
  const imgdiv = document.querySelector('.imgdiv');
  const headerBrand = document.querySelector('.headerBrand');
  hamburger.classList.toggle('active');
  headerItems.classList.toggle('active');
  imgdiv.classList.toggle('greyed_out');
  headerBrand.classList.toggle('greyed_out');
});