// Predefined user credentials
const users = [
    { id: "testuser1", password: "password1" },
    { id: "testuser2", password: "password2" },
    { id: "shareduser", password: "sharedpass" }, // Shared between user and admin
    { id: "commonuser", password: "commonpass" }  // Shared between user and admin
];

// Predefined admin credentials
const admins = [
    { id: "admin1", password: "adminpass1" },
    { id: "admin2", password: "adminpass2" },
    { id: "shareduser", password: "sharedpass" }, // Shared credentials for admin
    { id: "commonuser", password: "commonpass" }  // Shared credentials for admin
];

// User login form handling
document.getElementById("userLoginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const userIdInput = document.getElementById("userId").value;
    const passwordInput = document.getElementById("password").value;

    // Check user credentials
    const user = users.find(user => user.id === userIdInput && user.password === passwordInput);
    
    if (user) {
        window.location.href = "welcome.html"; // Redirect if valid user
    } else {
        alert("Invalid user ID or password. Please try again."); // Alert for invalid credentials
    }
});

// Admin login form handling
document.getElementById("adminLoginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const adminIdInput = document.getElementById("adminId").value;
    const adminPasswordInput = document.getElementById("adminPassword").value;

    // Check admin credentials
    const admin = admins.find(admin => admin.id === adminIdInput && admin.password === adminPasswordInput);
    
    if (admin) {
        window.location.href = "welcome.html"; // Redirect if valid admin
    } else {
        alert("Invalid admin ID or password. Please try again."); // Alert for invalid credentials
    }
});
