function validateEmail() {

    var email = document.querySelector("#email");
    var error = document.querySelector("#error-email");

    if (!email.checkValidity()) {
        error.innerHTML = "Error";
    }
}

function backMsg() {
    var error = document.querySelector("#error-mail");
    if (error.innerHTML = "Error") {

        error.innerHTML = ""
    }
}