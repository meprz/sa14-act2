
const form = document.getElementById("registration");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const usernameErr = document.getElementById("usernameErr");
const emailErr = document.getElementById("emailErr");
const passwordErr = document.getElementById("passwordErr");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    usernameErr.textContent = "";
    emailErr.textContent = "";
    passwordErr.textContent = "";
    
    if (username.value.length < 6) {
        usernameErr.textContent = "Your username must be <= 6 characters.";
        return;
    }
    
    if (email.validity.valid == false) {    // Hooray for looking up methods in documentation even though it can
                                    // be super boring to do sometimes...

        emailErr.textContent = "Please enter a valid email.";
        return;
    }
    
    if (password.value.length < 8) {
        passwordErr.textContent = "Your password must be <= 8 characters.";
        return;
    }
    
    // https://rubular.com/r/1e0YVZGVJTUP2P
    if (/^(?=.*\d)(?=.*[A-Z]).{8,}$/.test(password.value) == false) {
        passwordErr.textContent = "Your password must contain <= 1 capital letter and 1 number.";
        return;
    }
    
    alert("Woo, submitted successfully!");
    form.reset();
});
