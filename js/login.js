document.getElementById('login-btn').addEventListener('click', function (event) {

    event.preventDefault(); // Stop form submit reload 

    // Get Phone number and PIN number
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;

    // Validate phone and PIN (Note: Just Practice and Temporary)

    if (phoneNumber === '5' && pinNumber === '1234') {
        window.location.href = '/home.html'
    } else {
        alert('Wrong phone number or PIN');
    }
})