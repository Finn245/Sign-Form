const pass = document.querySelector("#Password");
const confirmPass = document.querySelector("#ConfirmPassword");
const err = document.querySelector(".error");

function PasswordChecker() {
    if (pass.value !== confirmPass.value) {
        err.textContent = "* Passwords don't match";
        pass.style.borderColor = "red";
        confirmPass.style.borderColor = "red";
    } else {
        err.textContent = ""; // Clear the error message if passwords match
        pass.style.borderColor = ""; // Reset border color
        confirmPass.style.borderColor = ""; // Reset border color
    }
}

pass.addEventListener('input', PasswordChecker);
confirmPass.addEventListener('input',PasswordChecker);
