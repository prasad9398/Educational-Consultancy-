document.getElementById('enquiryForm').addEventListener('submit', function(event) {
  const name = document.getElementById('name').value;
  const phone = document.getElementById('Number').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (name === '' || email === '' || phone === '' || message === '') {
      alert("Please fill out all required fields!");
      event.preventDefault(); 
  }
