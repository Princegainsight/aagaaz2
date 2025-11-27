// Predefined user credentials
const users = [
    { id: "testuser1", password: "password1" },
    { id: "testuser2", password: "password2" },
    { id: "commonUser", password: "commonPass" } // Common user ID
];

// Predefined admin credentials
const admins = [
    { id: "admin1", password: "adminpass1" },
    { id: "admin2", password: "adminpass2" },
    { id: "commonUser", password: "commonPass" } // Common admin ID
];

// User login form handling
document.getElementById("userLoginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const userIdInput = document.getElementById("userId").value;
    const passwordInput = document.getElementById("password").value;

    // Check user credentials
    const user = users.find(user => user.id === userIdInput && user.password === passwordInput);
    
    if (user) {
        // Redirect with user ID and type as URL parameters
        window.location.href = `welcome.html?userId=${encodeURIComponent(userIdInput)}&userType=user`; 
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
        // Redirect with admin ID and type as URL parameters
        window.location.href = `welcome.html?userId=${encodeURIComponent(adminIdInput)}&userType=admin`; 
    } else {
        alert("Invalid admin ID or password. Please try again."); // Alert for invalid credentials
    }
});
