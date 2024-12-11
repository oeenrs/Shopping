// Change Profile Picture
function changeProfilePicture() {
    const newImageUrl = prompt("Enter the URL for the new profile picture:");
    if (newImageUrl) {
        document.querySelector(".profile-image img").src = newImageUrl;
    }
}

// Save Profile
function saveProfile() {
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;

    // Example: Validate inputs (Add your backend call here)
    if (fullName && email && phone && address) {
        alert("Profile changes saved successfully!");
        return true; // Allow form submission (if integrated with backend)
    } else {
        alert("Please fill out all fields.");
        return false; // Prevent form submission
    }
}
