document.getElementById('login-btn').addEventListener('click', function (event) {
    event.preventDefault(); // Stop form submit reload 
    // Get Phone number
    const phoneNumber = document.getElementById('phone-number')
    console.log(phoneNumber.value);


    console.log('clicked')
})