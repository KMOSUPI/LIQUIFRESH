document.getElementById('enquiryForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    var formData = new FormData(this);

    // Simulate AJAX submission
    fetch('https://jsonplaceholder.typicode.com/posts', { // Using a dummy endpoint for demonstration
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        // Show success message
        alert('Thank you for your enquiry! We will get back to you soon.');
        // Optionally, redirect to successful.html
        window.location.href = 'successful.html';
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error submitting your enquiry. Please try again.');
    });
});