const projects = [
  {
    id: '1',
    name: 'task tracker',
    technologies: 'html',
    technologiess: 'css',
    technologiesss: 'javascript',
    description: 'rem ipsum dolor sit amet consectetur rem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omniadipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?',
    featuredimage: './assets/pix1.png',
    linktoliveserver: 'https://lolashot.github.io/My-Complete-Portfolio',
    linktosource: 'https://github.com/lolashot/My-Complete-Portfolio/',
  },
  {
    id: '2',
    name: 'Js Reserve',
    technologies: 'html',
    technologiess: 'css',
    technologiesss: 'javascript',
    description: 'rem ipsum dolor sit amet consectetur adipisicing elit. Praerem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnisentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?',
    featuredimage: './assets/pix4.png',
    linktoliveserver: 'https://lolashot.github.io/My-Complete-Portfolio',
    linktosource: 'https://github.com/lolashot/My-Complete-Portfolio/',
  },
  {
    id: '3',
    name: 'Piggy Bank Html',
    technologies: 'html',
    technologiess: 'css',
    technologiesss: 'javascript',
    description: 'rem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerumrem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omni laborum iure enim sint nemo omnis voluptate exercitationem eius?',
    featuredimage: './assets/pix1.png',
    linktoliveserver: 'https://lolashot.github.io/My-Complete-Portfolio',
    linktosource: 'https://github.com/lolashot/My-Complete-Portfolio/',
  },
  {
    id: '4',
    name: 'Ecommerce',
    technologies: 'Lavell',
    technologiess: 'Reat',
    technologiesss: 'Ruby on rails',
    description: 'rem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sinrem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnit nemo omnis voluptate exercitationem eius?',
    featuredimage: './assets/pix2.png',
    linktoliveserver: 'https://lolashot.github.io/My-Complete-Portfolio',
    linktosource: 'https://github.com/lolashot/My-Complete-Portfolio/',
  },
];

const closeBtn = document.getElementById('close-btn');
const modalContainer = document.getElementById('modal-container');

const nodeList = document.querySelectorAll('.open-modal');
nodeList.forEach((element) => element.addEventListener('click', (event) => {
  const found = projects.find((element) => element.id === event.target.id);
  document.getElementById('name').innerHTML = found.name;
  document.getElementById('technology1').innerHTML = found.technologies;
  document.getElementById('technology2').innerHTML = found.technologiess;
  document.getElementById('technology3').innerHTML = found.technologiesss;
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