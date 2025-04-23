
function openPopup() {
  const popupOverlay = document.getElementById("popupOverlay");
  popupOverlay.style.display = "flex";
}


function closePopup() {
  const popupOverlay = document.getElementById("popupOverlay");
  popupOverlay.style.display = "none";
}


function validateInput(input) {
  const id = input.id;
  const value = input.value.trim();
  const errorSpan = document.getElementById(id + "Error"); 


  if (value === "") {
    resetValidationState(input, errorSpan);
    return;
  }


  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^.{6,}$/;

 
  if (id === "email") {
    setValidationState(input, emailRegex.test(value), errorSpan, "Please enter a valid email address.");
  } else if (id === "password") {
    setValidationState(input, passwordRegex.test(value), errorSpan, "Password must be at least 6 characters.");
  }
}

function setValidationState(input, isValid, errorSpan, errorMessage) {
  if (isValid) {
    input.classList.remove("invalid");
    input.classList.add("valid");
    errorSpan.textContent = "";
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
    errorSpan.textContent = errorMessage; 
  }
}


function resetValidationState(input, errorSpan) {
  input.classList.remove("valid");
  input.classList.remove("invalid");
  errorSpan.textContent = ""; 
}


function validateForm(event) {
  event.preventDefault();

  const email = document.getElementById("email");
  const password = document.getElementById("password");

  validateInput(email);
  validateInput(password);


  if (email.classList.contains("valid") && password.classList.contains("valid")) {
   
    console.log("Sign-in successful!");
    closePopup(); 
  } else {
    
    if (!email.classList.contains("valid")) {
      document.getElementById("emailError").textContent = "Please fill out this field.";
    }
    if (!password.classList.contains("valid")) {
      document.getElementById("passwordError").textContent = "Please fill out this field.";
    }
  }
}
