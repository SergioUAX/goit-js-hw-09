let formData = {
    email: "",
    message: "",
};

const feedbackForm = document.querySelector(".feedback-form");
const feedbackFormEmail = feedbackForm.elements.email;
const feedbackFormMEssage = feedbackForm.elements.message;

document.addEventListener("DOMContentLoaded", loadFormData);
feedbackForm.addEventListener("input", handleInput);
feedbackForm.addEventListener("submit", handleSubmit);

function handleInput(event) {
    event.preventDefault();
    formData.email = feedbackFormEmail.value.trim();
    formData.message = feedbackFormMEssage.value.trim();
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));    
}

function loadFormData() {
    const savedData = localStorage.getItem("feedback-form-state");    
    if (savedData) {
        formData = JSON.parse(savedData);
        feedbackFormEmail.value = formData.email;
        feedbackFormMEssage.value = formData.message;        
    }            
}

function handleSubmit(event) {
    event.preventDefault();
    if (!formData.email || !formData.message) {
        alert("Fill please all fields");
        return;
    }
    console.log(formData);
    localStorage.removeItem("feedback-form-state");
    formData = {
        email: "",
        message: "",
    };
    feedbackForm.reset();
}
