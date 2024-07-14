document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('signup_btn').addEventListener('click', function(event) {
        event.preventDefault();

        var password = document.getElementById('password').value;
        var confirmPassword = document.getElementById('confirm-password').value;

        // Clear previous messages
        var existingAlert = document.querySelector('.alert');
        if (existingAlert) {
            existingAlert.remove();
        }

        if (password !== confirmPassword) {
            showAlert('Passwords do not match.', 'danger');
        } else {
            // Show success message
            alert('Signup successful!');
            // Clear the form fields
            document.querySelector('form').reset();
        }
    });
});

function showAlert(message, type) {
    var alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type}`;
    alertDiv.appendChild(document.createTextNode(message));
    
    var container = document.querySelector('.signup-form');
    var form = container.querySelector('form');
    container.insertBefore(alertDiv, form);

    setTimeout(function() {
        alertDiv.remove();
    }, 3000);
}
