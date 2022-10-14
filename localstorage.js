
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

function fetch_stored_data() {
  const fetched_data = JSON.parse(localStorage.getItem('formdata'));
  document.querySelector('.input-for-name').value  = fetched_data[0].name;
  document.getElementById('email-field').value = fetched_data[0].email;
  document.querySelector('.input-for-textarea').value = fetched_data[0].comment;
}

window.addEventListener('DOMContentLoaded', fetch_stored_data()); 
