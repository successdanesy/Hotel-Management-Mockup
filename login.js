// app.js
console.log("Script loaded");

function togglePassword() {
    const passwordField = document.getElementById("password");
    if (passwordField.type === "password") {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }
}

function handleLogin(event) {
    event.preventDefault();  // Prevent form submission to server

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Hardcoded login details for validation (you'll replace this with backend verification later)
    const correctEmail = "test@example.com";
    const correctPassword = "12345";

    if (email === correctEmail && password === correctPassword) {
        // Log success to console and redirect
        console.log("Login successful, redirecting to dashboard...");
        window.location.href = "Login.html";  // Link to the dashboard or another page
    } else {
        console.log("Login failed");
        alert("Incorrect email or password. Please try again.");
    }
}
