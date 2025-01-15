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
   // JavaScript to handle sidebar menu click and content change
   document.querySelectorAll('.sidebar .nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        // Remove 'active' class from all links
        document.querySelectorAll('.sidebar .nav-link').forEach(nav => {
            nav.classList.remove('active');
        });

        // Add 'active' class to the clicked link
        this.classList.add('active');

        // Update content based on the clicked link
        const contentId = this.getAttribute('data-content');
        const contentDisplay = document.getElementById('content-display');
        
        if (contentId === "personal-info") {
            contentDisplay.innerHTML = `
                <h3>Personal Information</h3>
                <p>Welcome to your profile. Update your personal information here.</p>`;
        } else if (contentId === "my-orders") {
            contentDisplay.innerHTML = `
                <h3>My Orders</h3>
                <p>View and track your orders here.</p>`;
        } else if (contentId === "manage-address") {
            contentDisplay.innerHTML = `
                <h3>Manage Address</h3>
                <p>Update your delivery and billing addresses here.</p>`;
        } else if (contentId === "payment-method") {
            contentDisplay.innerHTML = `
                <h3>Payment Method</h3>
                <p>Manage your payment methods securely here.</p>`;
        } else if (contentId === "password-manager") {
            contentDisplay.innerHTML = `
                <h3>Password Manager</h3>
                <p>Update your account password here.</p>`;
        } else if (contentId === "logout") {
            contentDisplay.innerHTML = `
                <h3>Logout</h3>
                <p>You have successfully logged out. Please log in again to access your account.</p>`;
        }
    });
});
