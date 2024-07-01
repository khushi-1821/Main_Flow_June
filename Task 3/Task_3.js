document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = sanitizeInput(document.getElementById('username').value);
    const email = sanitizeInput(document.getElementById('email').value);
    const password = sanitizeInput(document.getElementById('password').value);
    const confirmPassword = sanitizeInput(document.getElementById('confirmPassword').value);

    if (password !== confirmPassword) {
        displayMessage('Passwords do not match!', 'error');
        return;
    }

    displayMessage(`Registration successful! Welcome, ${username}.`, 'success');
});

function sanitizeInput(input) {
    const element = document.createElement('div');
    element.innerText = input;
    return element.innerHTML;
}

function displayMessage(message, type) {
    const messageDiv = document.getElementById('message');
    messageDiv.innerText = message;
    messageDiv.style.color = type === 'error' ? 'red' : 'green';
}
