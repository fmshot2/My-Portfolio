
const storedValue = [];
const contact_form = document.getElementById('id-of-form');

contact_form.addEventListener('change', () => {
  const thedata = {
    name: document.querySelector('.input-for-name').value,
    email: document.getElementById('email-field').value,
    comment: document.querySelector('.input-for-textarea').value,
  };
  storedValue[0] = thedata;
  localStorage.setItem('formdata', JSON.stringify(storedValue));
});



// local_form.addEventListener('submit', save_in_local_storage());
