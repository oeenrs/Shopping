// Form Validation Logic
function validateForm() {
    let isValid = true;

    // Reset error messages
    document.getElementById("emailError").style.display = "none";
    document.getElementById("passwordError").style.display = "none";
    document.getElementById("confirmPasswordError").style.display = "none";

    // Get form values
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Validate Email Format
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email.match(emailPattern)) {
        document.getElementById("emailError").style.display = "block";
        isValid = false;
    }

    // Validate Password Length
    if (password.length < 8) {
        document.getElementById("passwordError").style.display = "block";
        isValid = false;
    }

    // Validate Confirm Password
    if (password !== confirmPassword) {
        document.getElementById("confirmPasswordError").style.display = "block";
        isValid = false;
    }

    return isValid;
}
