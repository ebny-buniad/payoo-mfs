document.getElementById('withdraw-btn').addEventListener("click", function (event) {
    event.preventDefault();
    const amount = document.getElementById('cashout-amount').value;
    const convertedAmount = parseFloat(amount);
    const pin = document.getElementById('cashout-pin').value;
    const convertedPin = parseInt(pin);
    const mainBanlance = document.getElementById('main-balance').innerText;
    const convertedMainBalance = parseFloat(mainBanlance);

    if (convertedPin === 1111) {
        const sub = convertedMainBalance - convertedAmount;
        document.getElementById('main-balance').innerText = sub;
    }
    else {
        alert('Password wrong');
    }
})