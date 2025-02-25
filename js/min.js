document.getElementById('container-cashout').style.display = 'none';
document.getElementById('add-money-btn').addEventListener("click", function () {
    document.getElementById('container-add-money').style.display = 'block';
    document.getElementById('container-cashout').style.display = 'none';
})

document.getElementById('cashout-btn').addEventListener("click", function () {
    document.getElementById('container-add-money').style.display = 'none';
    document.getElementById('container-cashout').style.display = 'block';
})