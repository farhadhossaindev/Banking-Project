document.getElementById('loginBtn').addEventListener('click', function () {

    // default admin access
    const userGamil = 'admin@gmail.com';
    const userPass = "123456";

    // Get user information 
    const loginEmail = document.getElementById('email');
    const GivenEmail = loginEmail.value;
    const loginPassword = document.getElementById('password');
    const GivenPass = loginPassword.value

    if (GivenEmail === userGamil && GivenPass === userPass) {
        alert("Login successfully")
        window.location.href = "home.html";
    } else {
        alert("Invalid Credential ")
    }

});