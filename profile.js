// Handle toggles for "Receive Notifications" and "Dark Mode"
document.getElementById('notifications-toggle').addEventListener('change', function() {
    if (this.checked) {
        alert('Notifications Enabled');
    } else {
        alert('Notifications Disabled');
    }
});

document.getElementById('dark-mode-toggle').addEventListener('change', function() {
    if (this.checked) {
        document.body.style.backgroundColor = '#222';
        document.body.style.color = '#fff';
        document.querySelector('.container').style.backgroundColor = '#333';
    } else {
        document.body.style.backgroundColor = '#f4f4f4';
        document.body.style.color = '#333';
        document.querySelector('.container').style.backgroundColor = '#fff';
    }
});
