const hamburger = document.querySelector('#clicktoggle');
hamburger.addEventListener('click', () => {
  console.log('ggg', 'fgfgf');
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