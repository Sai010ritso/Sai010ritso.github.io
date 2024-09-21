// Initialize EmailJS
(function() {
    emailjs.init("YOUR_USER_ID"); //  EmailJS user ID
})();

function placeOrder() {
    const foodNumber = document.getElementById('foodNumber').value;
    const email = document.getElementById('customerEmail').value;

    // Display order confirmation
    alert(`Order placed for item number ${foodNumber}. A confirmation will be sent to ${email}.`);
    
    // Call function to send email
    sendEmail(email, foodNumber);
}

function sendEmail(email, foodNumber) {
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
        to_email: email,
        food_number: foodNumber,
        message: "Thank you for your order! Your food will be ready soon."
    })
    .then((response) => {
        console.log('Email sent successfully:', response);
    })
    .catch((error) => {
        console.log('Error sending email:', error);
    });
}
