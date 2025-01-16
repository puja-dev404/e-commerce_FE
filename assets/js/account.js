// Event listeners for each menu item to display respective content
document.getElementById('personal-info').addEventListener('click', function() {
    document.getElementById('content-display').innerHTML = `
        <h3>Personal Information</h3>
        <p>Welcome to your profile. Update your personal information here.</p>`;
    setActiveLink(this);
});

document.getElementById('my-orders').addEventListener('click', function() {
    document.getElementById('content-display').innerHTML = `
        <h3>My Orders</h3>
        <p>View and track your orders here.</p>`;
    setActiveLink(this);
});

document.getElementById('manage-address').addEventListener('click', function() {
    document.getElementById('content-display').innerHTML = `
        <h3>Manage Address</h3>
        <p>Update your delivery and billing addresses here.</p>`;
    setActiveLink(this);
});

document.getElementById('payment-method').addEventListener('click', function() {
    document.getElementById('content-display').innerHTML = `
        <h3>Payment Method</h3>
        <p>Manage your payment methods securely here.</p>`;
    setActiveLink(this);
});

document.getElementById('password-manager').addEventListener('click', function() {
    document.getElementById('content-display').innerHTML = `
        <h3>Password Manager</h3>
        <p>Update your account password here.</p>`;
    setActiveLink(this);
});

document.getElementById('logout').addEventListener('click', function() {
    document.getElementById('content-display').innerHTML = `
        <h3>Logout</h3>
        <p>You have successfully logged out. Please log in again to access your account.</p>`;
    setActiveLink(this);
});

// Function to set the active class for clicked link
function setActiveLink(activeLink) {
    document.querySelectorAll('.sidebar .nav-link').forEach(link => {
        link.classList.remove('active');
    });
    activeLink.classList.add('active');
}
