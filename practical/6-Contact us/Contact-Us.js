// Submit Contact Form
function submitForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const formStatus = document.getElementById("formStatus");

    // Validate Form
    if (!name || !email || !message) {
        formStatus.textContent = "Please fill out all fields.";
        formStatus.style.color = "red";
        return;
    }

    // Simulate form submission
    formStatus.textContent = "Thank you for contacting us! We will get back to you soon.";
    formStatus.style.color = "green";

    // Clear form fields
    document.getElementById("contactForm").reset();
}
