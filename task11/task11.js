document.getElementById('form').addEventListener('submit', function(event) {
    const name_input = document.getElementById('name');
    const name_value = name_input.value.trim();
    const email_input = document.getElementById('email');
    const email_value = email_input.value.trim();
    if(name_value === ''){
        alert('Please enter a name');
        event.preventDefault();
    }
    if(email_value === ''){
        alert('Please enter an email address');
        event.preventDefault();
  }
});