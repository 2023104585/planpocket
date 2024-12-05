document.getElementById('loginForm').addEventListener('submit', function(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Get the values of the input fields
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Basic validation
    if (username === '' || password === '') {
        alert('Please fill in both username and password.');
    } else {
        // Redirect to main.html
        window.location.href = 'main.html';
    }
});
