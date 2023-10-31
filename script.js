document.addEventListener("DOMContentLoaded", () => {
    const submitForm = document.querySelector("form");
    let labels = document.querySelectorAll("label");
    let inputs = document.querySelectorAll("input[placeholder]");
    let warningMessage, img;

    Array.from(labels).forEach(label => {
        warningMessage = document.createElement("span");
        img = document.createElement('img');
        warningMessage.classList.add("warningmessage");
        label.append(warningMessage);
        label.append(img);
    })

    Array.from(inputs).forEach(input => {
        input.addEventListener("input", (e) => {
            input.value = e.target.value;
        });
    })

    submitForm.addEventListener("submit", (event) => {
        event.preventDefault();
        Array.from(inputs).forEach(input => {
            if(!input.value) {
                input.classList.add('add');
                input.nextElementSibling.textContent = errorMessage(input.placeholder);
                input.nextElementSibling.nextElementSibling.src = './images/icon-error.svg';
                if(input.id === 'email-address') {
                    input.nextElementSibling.textContent = 'Looks like this is not an email';
                }
            }
            else {
                input.classList.remove('add');
                input.nextElementSibling.textContent = '';
                input.nextElementSibling.nextElementSibling.src = '';
            }
        })
    });

    function errorMessage(a) {
        return `${a} cannot be empty`;
    }
});