document.getElementById('signupForm').addEventListener('submit', function(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Get the values of the input fields
    var name = document.getElementById('name').value;
    var username = document.getElementById('username').value;
    var dob = document.getElementById('dob').value;
    var password = document.getElementById('password').value;

    // Basic validation
    if (name === '' || username === '' || dob === '' || password === '') {
        alert('Please fill in all the fields.');
    } else {
        // Redirect to the main page or handle the sign-up logic
        window.location.href = 'main.html';
    }
});
