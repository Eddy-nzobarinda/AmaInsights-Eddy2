document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const sendButton = document.getElementById("send-button");

    function clearInputFields() {
        form.reset();
    }
    sendButton.addEventListener("click", function (event) {
        event.preventDefault();
        clearInputFields();
    });
});