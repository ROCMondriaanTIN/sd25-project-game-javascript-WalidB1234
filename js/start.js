// DOM Elements
const hogerBtn = document.querySelector('#button1');
const lagerBtn = document.querySelector('#button2');
const nummerDisplay = document.querySelector('#dobbelsteen1');
const nummerDisplay2 = document.querySelector('#dobbelsteen2');
const scoreElement = document.querySelector('#score');
const saldoText = document.getElementById('saldoText');
const inzetInput = document.getElementById("inzet");
const inzetDisplay = document.getElementById("inzetValue");
window.onload = start;

function start() {
    startGame();
    nummerDisplay.innerHTML = nummer;
    nummerDisplay2.innerHTML = '?';
    saldoText.innerHTML = saldo;
}