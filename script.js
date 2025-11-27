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

<!-- Gainsight PX Tag-->

  (function(n,t,a,e,co){var i="aptrinsic";n[i]=n[i]||function(){
      (n[i].q=n[i].q||[]).push(arguments)},n[i].p=e;n[i].c=co;
    var r=t.createElement("script");r.async=!0,r.src=a+"?a="+e;
    var c=t.getElementsByTagName("script")[0];c.parentNode.insertBefore(r,c)
  })(window,document,"https://web-sdk.aptrinsic.com/api/aptrinsic.js","AP-YR0EQEB1VEKS-2");

//passing user and account objects:
aptrinsic("identify",
  {
  //User Fields
    "id": users.id, // Required for logged in app users
    "email": "userEmail@address.com",
    "firstName": "John",
    "lastName": "Smith",
    "signUpDate": 1522697426479, //unix time in ms
    "plan" : "gold", //Custom attributes - please create those custom attributes in Aptrinsic via Account Settings to be tracked.
    "price" : 95.5,
    "userHash": "" // optional transient for HMAC identification
  },
  {
  //Account Fields
    "id":"IBM", //Required
    "name":"International Business Machine",
    "Program": "Platinum" // flat custom attributes
 });


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
