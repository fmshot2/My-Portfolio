var storedValue = [];
const form = document.getElementById('form');
const save_in_local_storage = () => {
  // form.addEventListener('change', () => {
    const thedata = {
      // name: document.getElementById('form_name').value,
      name: document.querySelector('.input-for-name').value,
      email: document.getElementById('id-for-email').value,
      comment: document.querySelector('.input-for-textarea').value,

      // email: document.getElementById('form_email').value,
      // comment: document.getElementById('form_message').value,
    };
    storedValue.push(thedata);
    localStorage.setItem('formdata', JSON.stringify(storedValue));
  // });
}

const fetch_stored_data = () => {
  const receive = JSON.parse(localStorage.getItem('formdata'));
  
  document.querySelector('.input-for-name').value  = receive[0].name;
  
  document.querySelector('id-for-email').value = receive[0].email;
   document.querySelector('.input-for-textarea').value = receive[0].comment;

  // document.getElementById('form_email').value = receive[0].email;
  // document.getElementById('form_name').value = receive[0].name;
  // document.getElementById('form_message').value = receive[0].comment;
}
form.addEventListener('submit', save_in_local_storage());
window.addEventListener('DOMContentLoaded', fetch_stored_data());


module.exports = {
  save_in_local_storage, fetch_stored_data,
};