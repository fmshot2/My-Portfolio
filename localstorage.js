const storedValue = [];
const form = document.getElementById('form');
function save_in_local_storage() {
  form.addEventListener('change', () => {
    const thedata = {
      name: document.getElementById('form_name').value,
      email: document.getElementById('form_email').value,
      comment: document.getElementById('form_message').value,
    };
    storedValue.unshift(thedata);
    localStorage.setItem('formdata', JSON.stringify(storedValue));
  });
}

function fetch_stored_data() {
  const receive = JSON.parse(localStorage.getItem('formdata'));
  document.getElementById('form_email').value = receive[0].email;
  document.getElementById('form_name').value = receive[0].name;
  document.getElementById('form_message').value = receive[0].comment;
}
form.addEventListener('submit', save_in_local_storage());
window.addEventListener('DOMContentLoaded', fetch_stored_data());
