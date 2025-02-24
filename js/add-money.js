const addMoney = document.getElementById('add-money').addEventListener("click", function (event) {
    event.preventDefault();
    const amount = document.getElementById('amount').value;
    const convertedAmount = parseFloat(amount);
    const pin = document.getElementById('pin').value;
    const convertedPin = parseInt(pin);
    const mainBanlance = document.getElementById('main-balance').innerText;
    const convertedMainBalance = parseFloat(mainBanlance);


    if (convertedPin === 1111) {
        const sum = convertedMainBalance + convertedAmount;
        document.getElementById('main-balance').innerText = sum;
    } else {
        console.log('PIN is not correct')
    }
})