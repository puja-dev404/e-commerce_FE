function togglePassword(id) {
    const input = document.getElementById(id);
    const eyeIcon = input.nextElementSibling;
    if (input.type === "password") {
        input.type = "text";
        eyeIcon.classList.replace("fa-eye", "fa-eye-slash");
    } else {
        input.type = "password";
        eyeIcon.classList.replace("fa-eye-slash", "fa-eye");
    }
}

// 
  