function registerValidation() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;
    var dob = document.getElementById("dob").value;
    var nameError = document.getElementById("error-name");
    var emailError = document.getElementById("error-email");
    var passwordError = document.getElementById("error-password");
    var confirmPasswordError = document.getElementById("error-confirm-password");
    var dobError = document.getElementById("error-dob");
    var gender = document.querySelector('input[name="gender"]:checked');
    var policy = document.getElementById("policy");
    var genderError = document.getElementById("error-gender");
    var policyError = document.getElementById("error-policy");

    var inputName = document.getElementById("name-box");
    var inputEmail = document.getElementById("email-box");
    var inputPassword = document.getElementById("password-box");
    var inputConfirmPassword = document.getElementById("confirm-password-box");
    var inputDob = document.getElementById("dob-box");
    var labelGender = document.getElementById("label-gender");

    nameError.innerHTML = "";
    emailError.innerHTML = "";
    passwordError.innerHTML = "";
    confirmPasswordError.innerHTML = "";
    dobError.innerHTML = "";
    genderError.innerHTML = "";
    policyError.innerHTML = "";
    inputName.classList.remove("valid", "invalid");
    inputEmail.classList.remove("valid", "invalid");
    inputPassword.classList.remove("valid", "invalid");
    inputConfirmPassword.classList.remove("valid", "invalid");
    inputDob.classList.remove("valid", "invalid");
    labelGender.classList.remove("valid", "invalid");

    if (name == "") {
        nameError.innerHTML = "Name is required";
        inputName.classList.add("invalid");
        return false;
    } else {
        inputName.classList.add("valid");
    }

    if (email == "") {
        emailError.innerHTML = "Email is required";
        inputEmail.classList.add("invalid");
        return false;
    } else if (!validateEmail(email)) {
        emailError.innerHTML = "Invalid email format";
        inputEmail.classList.add("invalid");
        return false;
    } else {
        inputEmail.classList.add("valid");
    }

    if (password == "") {
        passwordError.innerHTML = "Password is required";
        inputPassword.classList.add("invalid");
        return false;
    } else {
        inputPassword.classList.add("valid");
    }

    if (confirmPassword == "") {
        confirmPasswordError.innerHTML = "Confirm Password is required";
        inputConfirmPassword.classList.add("invalid");
        return false;
    } else if (password != confirmPassword) {
        confirmPasswordError.innerHTML = "Passwords do not match";
        inputConfirmPassword.classList.add("invalid");
        return false;
    } else {
        inputConfirmPassword.classList.add("valid");
    }

    if (dob == "") {
        dobError.innerHTML = "Date of Birth is required";
        inputDob.classList.add("invalid");
        return false;
    } else {
        inputDob.classList.add("valid");
    }

    if (!gender) {
        genderError.innerHTML = "Gender is required";
        labelGender.classList.add("invalid");
        return false;
    } else {
        labelGender.classList.add("valid");
    }

    if (!policy.checked) {
        policyError.innerHTML = "You must agree to the terms and privacy policy";
        return false;
    }

    return true;
}

function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

document.getElementById("toggle-password").addEventListener("click", function () {
    var passwordInput = document.getElementById("password");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
});

document.getElementById("toggle-confirmPassword").addEventListener("click", function () {
    var confirmPassword = document.getElementById("confirm-password");
    if (confirmPassword.type === "password") {
        confirmPassword.type = "text";
    } else {
        confirmPassword.type = "password";
    }
});

document.querySelectorAll(".input-box input").forEach((input) => {
    input.addEventListener("change", (event) => {
        if (event.target.value) {
            event.target.classList.add("filled");
        } else {
            event.target.classList.remove("filled");
        }
    });
});
