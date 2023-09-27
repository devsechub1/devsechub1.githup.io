
// Initialize Email.js with your user ID and template ID
emailjs.init("GKBXwGS74d5LUzP4H");

// Function to send form data via email (dummy function)
function sendFormData(formData) {
    // In a real application, you would send this data to a server via an API
    console.log('Sending form data:', formData);
    // Here, you can use JavaScript to send the form data to your backend or perform other actions.
}
// Handle form submission
const submitButton = document.getElementById('submitBtn');
const alertSuccess = document.getElementById('alert-success');

submitButton.addEventListener('click', function () {
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const message = document.getElementById('message').value;

    // Send the form data via Email.js
    emailjs.send("service_weo6zss", "template_hw4pfnl", {
        to_email: "devsechub@gmail.com", // Replace with the recipient's email address  "devsechub@gmail.com"
        from_name: fullName,
        from_email: email,
        phone_number: phoneNumber,
        message: message,
    }).then(
        function (response) {
            console.log("Email sent successfully:", response);
            // Clear form fields and display a success message (you can customize this)
            document.getElementById('contactForm').reset();
            // Display a success message
            alertSuccess.textContent ='Message sent successfully. We will get back to you soon.'
            alertSuccess.style.visibility='visible';
        },
        function (error) {
            console.error("Email could not be sent:", error);
            // Handle error and display an error message if needed
        }
    );
});

