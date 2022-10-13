const projects = [
  {
    id: '1',
    name: 'ToDo tracker',
    technology_one: 'html',
    technology_two: 'css',
    technology_three: 'javascript',
    description: 'Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?',
    featuredimage: './assets/pix1.png',
    linktoliveserver: 'https://fmshot2.github.io/My-Portfolio/',
    linktosource: 'https://github.com/fmshot2/My-Portfolio',
  },
  {
    id: '2',
    name: 'Javascript Recursiveness',
    technology_one: 'html',
    technology_two: 'css',
    technology_three: 'javascript',
    description: 'adipisur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnisentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?',
    featuredimage: './assets/pix4.png',
    linktoliveserver: 'https://fmshot2.github.io/My-Portfolio/',
    linktosource: 'https://github.com/fmshot2/My-Portfolio',
  },
  {
    id: '3',
    name: 'Virtual Business cards',
    technology_one: 'html',
    technology_two: 'css',
    technology_three: 'javascript',
    description: 'sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omni laborum iure enim sint nemo omnis voluptate exercitationem eius?',
    featuredimage: './assets/pix1.png',
    linktoliveserver: 'https://fmshot2.github.io/My-Portfolio/',
    linktosource: 'https://github.com/fmshot2/My-Portfolio',
  },
  {
    id: '4',
    name: 'Ecommerce',
    technology_one: 'Lavell',
    technology_two: 'Reat',
    technology_three: 'Ruby on rails',
    description: 'rem ipsum dolor sit amet consectetur adipisicing elit. Omnit nemo omnis voluptate exercitationem eius?',
    featuredimage: './assets/pix2.png',
    linktoliveserver: 'https://fmshot2.github.io/My-Portfolio/',
    linktosource: 'https://github.com/fmshot2/My-Portfolio',
  },
];

const closeBtn = document.getElementById('close-btn');
const modalContainer = document.getElementById('modal-container');

const nodeList = document.querySelectorAll('.open-modal');
nodeList.forEach((element) => element.addEventListener('click', (event) => {
  const found = projects.find((element) => element.id === event.target.id);
  document.getElementById('name').innerHTML = found.name;
  document.getElementById('technology1').innerHTML = found.technology_one;
  document.getElementById('technology2').innerHTML = found.technology_two;
  document.getElementById('technology3').innerHTML = found.technology_three;
  document.getElementById('description').innerHTML = found.description;
  document.getElementById('image').src = found.featuredimage;
  document.getElementById('live').href = found.linktoliveserver;
  document.getElementById('source').href = found.linktosource;
  modalContainer.style.display = 'block';
}));

closeBtn.addEventListener('click', () => {
  modalContainer.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modalContainer) {
    modalContainer.style.display = 'none';
  }
});
