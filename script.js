// Predefined user credentials
<!-- Gainsight PX Tag-->
  <script type="text/javascript">
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
</script>
<!-- Gainsight PX Tag-->


const users = [
    { id: "testuser1", password: "password1" },
    { id: "testuser2", password: "password2" },
    { id: "testuser3", password: "password3" }
];

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    const userIdInput = document.getElementById("userId").value;
    const passwordInput = document.getElementById("password").value;

    // Check if entered credentials match any of the predefined users
    const user = users.find(user => user.id === userIdInput && user.password === passwordInput);
    
    if (user) {
        window.location.href = "welcome.html"; // Redirect to welcome page if credentials are correct
    } else {
        alert("Invalid user ID or password. Please try again."); // Alert if credentials are incorrect
    }
});
