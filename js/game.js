let nummer = Math.floor(Math.random() * 6) + 1 // nummer tot 6
let oudeNummer = Math.floor(Math.random() * 6) + 1;
let score = 0;
let inzetWaarde = 0;
let scoreElement = document.querySelector('#score')

const hogerBtn = document.querySelector('#button1');
const lagerBtn = document.querySelector('#button2');
const nummerDisplay = document.querySelector('#dobbelsteen1')
const nummerDisplay2 = document.querySelector('#dobbelsteen2')

hogerBtn.addEventListener('click', function () {
    if (inzetWaarde === 0) {
        alert("Zet eerst een bedrag in!");
        return;
    }
    if (nummer > oudeNummer) {
        showMessage('Goed')
        score++
        saldo = saldo + inzetWaarde;
        updateSaldoDisplay();
    }
    else if (nummer < oudeNummer) {
        showMessage('Fout');
        score--;
        saldo = saldo - inzetWaarde;
        updateSaldoDisplay();
    }
    else showMessage('zelfde number')
    inzetWaarde = 0;
    document.getElementById("inzet").value = "";
    document.getElementById("inzetValue").innerText = "";
    revealNumber()
})

lagerBtn.addEventListener('click', function () {
    if (inzetWaarde === 0) {
        alert("Zet eerst een bedrag in!");
        return;
    }
    if (nummer < oudeNummer) {
        showMessage('Goed');
        score++
        saldo = saldo + inzetWaarde;
        updateSaldoDisplay();
    }
    else if (nummer > oudeNummer) {
        showMessage('Fout');
        score--;
        saldo = saldo - inzetWaarde;
        updateSaldoDisplay();
    }
    else showMessage('zelfde number')
    inzetWaarde = 0;
    document.getElementById("inzet").value = "";
    document.getElementById("inzetValue").innerText = "";
    revealNumber()
})

function start() {
    nummer = Math.floor(Math.random() * 6) + 1;
    nummerDisplay.innerHTML = nummer;
    nummerDisplay2.innerHTML = '?';
    setupInzet();
}

function generateNew() {
    if (scoreElement) {
        scoreElement.innerHTML = score;
    }
    oudeNummer = nummer;
    nummer = Math.floor(Math.random() * 6) + 1;
    nummerDisplay.innerHTML = oudeNummer;
}

function revealNumber() {
    nummerDisplay2.textContent = nummer;
    setTimeout(function () {
        nummerDisplay2.textContent = '?';
        generateNew();
    }, 2000)
}

//start()


let saldo = 100;
const saldoText = document.getElementById('saldoText');
saldoText.innerHTML = saldo;

function updateSaldoDisplay() {
    saldoText.innerHTML = saldo;
}

function setupInzet() {
    const saldoElement = document.getElementById("inzetValue");
    const inputElement = document.getElementById("inzet");

    inputElement.addEventListener("keyup", () => {
        saldoElement.innerText = `Inzet: ${inputElement.value}`;
    });
}

function inzet() {
    const inputElement = document.getElementById("inzet");

    let betAmount = parseInt(inputElement.value);

    if (!betAmount || betAmount <= 0) {
        alert("Voer een geldig bedrag in");
        return;
    }

    if (saldo < betAmount) {
        alert("Niet genoeg saldo")
        return
    }

    inzetWaarde = betAmount;
    console.log("Inzet value:", betAmount);
}