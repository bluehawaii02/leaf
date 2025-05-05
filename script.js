const form = document.getElementById("form");
const usernameInput = document.getElementById("fname");
const lnameInput = document.getElementById("lname");
const fname_error = document.getElementById("fname_error");
const lname_error = document.getElementById("lname_error");
const emailInput = document.getElementById("email");
const email_error = document.getElementById("email_error");
const passwordInput = document.getElementById("password");
const password_error = document.getElementById("password_error");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    const username = usernameInput.value.trim();
    const lname = lnameInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    if (username ==="") {
        fname_error.textContent = "Please enter a username.";
        fname_error.style.color = "red";
        return;
    }
    else if(username.length < 4) {
        fname_error.textContent = "username must be at least 4 characters long.";
        fname_error.style.color = "red";
        return;
    }
    else{
        fname_error.textContent = "Username is valid!";
        fname_error.style.color = "green";
    }

    if (lname===""){
        lname_error.textContent = "last name cannot be empty"
        lname_error.style.color = "red"
        return;
    }else if (lname.length < 4){
        lname_error.textContent = "last name must be at least 4 characters long"
        lname_error.style.color = "red"
        return;
    }else{
        lname_error.textContent = "last name is valid!"
        lname_error.style.color = "green"
    }

    if (!emailRegex.test(email)) {
        email_error.textContent = "Please enter a valid email address.";
        email_error.style.color = "red";
        return;
    }
    else{
        email_error.textContent = "email is valid!";
        email_error.style.color = "green";
    }
    if (password ==="") {
        password_error.textContent = "Please enter your password.";
        password_error.style.color = "red";
        return;
    }
    else if(password.length < 4) {
        password_error.textContent = "password must be at least 4 characters long.";
        password_error.style.color = "red";
        return;
    }
    else{
        fname_error.textContent = "Username is valid!";
        fname_error.style.color = "green";
    }
    alert("Form submitted successfully!");
});
