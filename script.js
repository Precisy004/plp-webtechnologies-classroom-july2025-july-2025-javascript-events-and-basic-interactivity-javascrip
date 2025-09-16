 
// Light/Dark Mode Toggle
let modeToggle = document.getElementById("modeToggle");
modeToggle.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});

// Counter Example
let count = 0;
let countDisplay = document.getElementById("count");
let increaseBtn = document.getElementById("increaseBtn");
let resetBtn = document.getElementById("resetBtn");

increaseBtn.addEventListener("click", function() {
    count++;
    countDisplay.textContent = count;
});

resetBtn.addEventListener("click", function() {
    count = 0;
    countDisplay.textContent = count;
});

// Collapsible FAQ
let faqTitle = document.getElementById("faqTitle");
let faqAnswer = document.getElementById("faqAnswer");

faqTitle.addEventListener("click", function() {
    if (faqAnswer.style.display === "none") {
        faqAnswer.style.display = "block";
    } else {
        faqAnswer.style.display = "none";
    }
});

// Part 2: Form Validation

let myForm = document.getElementById("myForm");
let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");

let nameError = document.getElementById("nameError");
let emailError = document.getElementById("emailError");
let passwordError = document.getElementById("passwordError");
let formMessage = document.getElementById("formMessage");

myForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from reloading
    let valid = true;

    // Check Name
    if (nameInput.value.trim() === "") {
        nameError.textContent = "Name cannot be empty.";
        valid = false;
    } else {
        nameError.textContent = "";
    }

    // Check Email using regex
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailInput.value.match(emailPattern)) {
        emailError.textContent = "Enter a valid email.";
        valid = false;
    } else {
        emailError.textContent = "";
    }

    // Check Password length
    if (passwordInput.value.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters.";
        valid = false;
    } else {
        passwordError.textContent = "";
    }

    // Success message
    if (valid) {
        formMessage.textContent = "Form submitted successfully! ✅";
        formMessage.style.color = "green";
    } else {
        formMessage.textContent = "";
    }
});
