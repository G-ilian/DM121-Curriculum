document.getElementById('contactForm').addEventListener('submit', (event) => {
    
    event.preventDefault();
    const form = event.target;

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    if(!name || !email || !subject || !message) {
        alert('Please fill in all fields');
        return;
    }
    form.submit();
    form.reset();  
});