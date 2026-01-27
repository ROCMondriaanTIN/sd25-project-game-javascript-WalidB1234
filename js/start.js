const hogerBtn = document.querySelector('#button1');
const lagerBtn = document.querySelector('#button2');
const nummerDisplay = document.querySelector('#dobbelsteen1');
const nummerDisplay2 = document.querySelector('#dobbelsteen2');
const scoreElement = document.querySelector('#score');
const saldoText = document.querySelector('#saldoText');
const inzetInput = document.querySelector('#inzet');
const inzetDisplay = document.querySelector('#inzetValue');

window.onload = () => {
    startGame();

    
    nummerDisplay.innerHTML = nummer;
    nummerDisplay2.innerHTML = "?";
    saldoText.innerHTML = saldo;
};