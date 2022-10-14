const form = document.getElementById('id-of-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const x = document.getElementById('email-field').value;

  let text;
  if (x.toLowerCase() === x) {
    form.action = 'https://formspree.io/f/xqkjqrqp';
    form.submit();
  } else {
    document.getElementById('message').innerHTML = text;
    document.getElementById('message').style.color = 'red';
  }
});
