document.addEventListener("DOMContentLoaded", (event) => {
    const submitForm = document.querySelector("form");
    const firstNameInput = document.getElementById("first-name");
    const lastNameInput = document.getElementById("last-name");
    const emailAddress = document.getElementById("email-address");
    const password = document.getElementById("password");
    let inputs = document.querySelectorAll("input[placeholder]");
    Array.from(inputs).forEach(input => {
        input.addEventListener("input", (e) => {
            console.log(e.target.value);
            input.value = e.target.value;
        })
    })

    submitForm.addEventListener("submit", (event) => {
        event.preventDefault();
        console.log("Hey");
        Array.from(inputs).forEach(input => {
            if(!input.value) {
                input.classList.add('add');
            } else {
                input.classList.remove('add');
            }
        })
    });

    function errorMessage(a) {
        return `${a} cannot be empty`;
    }
});