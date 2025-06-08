// Variable Declaration
const loginBtn = document.querySelector("#login");
const registerBtn = document.querySelector("#register");
const loginForm = document.querySelector(".login-form");
const registerForm = document.querySelector(".register-form");

// Login button function
loginBtn.addEventListener("click", () => {
    loginBtn.style.backgroundColor = "#21264D";
    registerBtn.style.backgroundColor = "rgba(255, 255, 255, 0.2)";

    loginForm.style.left = "50%";
    registerForm.style.left = "-50%";

    loginForm.style.opacity = 1;
    registerForm.style.opacity = 0;

    document.querySelector(".col-1").style.borderRadius = "0 30% 20% 0";
});

registerBtn.addEventListener("click", () => {
    loginBtn.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
    registerBtn.style.backgroundColor = "#21264D";

    loginForm.style.left = "150%";
    registerForm.style.left = "50%";

    loginForm.style.opacity = 0;
    registerForm.style.opacity = 1;

    document.querySelector(".col-1").style.borderRadius = "0 20% 30% 0";
});

// Signup & Signin Functionality
document.addEventListener("DOMContentLoaded", function () {
    const signUpBtn = document.querySelector(".register-form .input-submit");
    const signInBtn = document.querySelector(".login-form .input-submit");

    signUpBtn.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent form submission

        let email = document.querySelector(".register-form input[type='email']").value;
        let username = document.querySelector(".register-form input[type='username']").value;
        let password = document.querySelector(".register-form input[type='password']").value;

        if (username && password && email) {
            alert("Account created successfully!");
            // You can add backend logic here later to store accounts securely
        } else {
            alert("Please enter all details.");
        }
    });

    signInBtn.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent form submission

        let enteredUsername = document.querySelector(".login-form input[type='username']").value;
        let enteredPassword = document.querySelector(".login-form input[type='password']").value;

        // Since no saved data, just alert failure
        alert("Login feature disabled - no account storage available.");
    });
});
