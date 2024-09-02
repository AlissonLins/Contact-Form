document.getElementById('.form').addEventListener("submit", function(event) {
    let valid = true;

    document.querySelectorAll('.error').forEach(error => error.textContent = '');

    const firstName = document.getElementById("#firstName").value;
    if (firstName === "") {
        document.getElementById("#fistNameError").textContent = "This field required";
        valid = false;
    }

    const lastName = document.getElementById("#lastName").value;
    if (lastName === "") {
        document.getElementById("#lastNameError").textContent = "This field required";
        valid = false;
    }

    const email = document.getElementById("#email").value;
    if (email === "") {
        document.getElementById("#emailError").textContent = "Please enter a valid email address";
        valid = false;
    }

    const querytype = document.getElementById("#queryType").value;
    if (!querytype) {
        document.getElementById("#queryTypeError").textContent = "Please select a query type";
        valid = false;
    }

    const message = document.getElementById("#message").value;
    if (message === "") {
        document.getElementById("#messageError").textContent = "This field required";
        valid = false;
    }

    const checkbox = document.getElementById("#checkbox").checked;
    if (!checkbox) {
        document.getElementById("#checkboxError").textContent = "To submit this form, please consent to being contacted";
        valid = false;
    }

    if (!valid) {
        event.preventDefault();
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}