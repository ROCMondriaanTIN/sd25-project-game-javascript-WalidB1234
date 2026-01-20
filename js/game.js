let nummer = Math.floor(Math.random() * 6) + 1 // nummer tot 6
let oudeNummer = 1;
let score = 0;
let scoreElement = document.querySelector('#score')

const hogerBtn = document.querySelector('#button1');
const lagerBtn = document.querySelector('#button2');
const nummerDisplay = document.querySelector('#dobbelsteen1')
const nummerDisplay2 = document.querySelector('#dobbelsteen2')

hogerBtn.addEventListener('click', function () {
    if (nummer > oudeNummer) {
        alert('Goed')
        score++
    }
    else if (nummer < oudeNummer) {
        alert('Fout'); score--;
    }
    else alert('zelfde number')
    revealNumber()
    generateNew()
})

lagerBtn.addEventListener('click', function () {
    if (nummer < oudeNummer) {
        alert('Goed'); score++
    }
    else if (nummer > oudeNummer) {
        alert('Fout');
        score--;
    }
    else alert('zelfde number')
    revealNumber()
    generateNew()
})

function start() {
    nummer = 2;
    nummerDisplay.textContent = 1;
}
function generateNew() {
    scoreElement.textContent = score;
    oudeNummer = nummer;
    nummer = Math.floor(Math.random() * 6) + 1;
    nummerDisplay.textContent = oudeNummer;
}

function revealNumber() {
    nummerDisplay2.textContent = nummer;
    setTimeout(function () {
        nummerDisplay2.textContent = '?';
    }, 2000)
}

start()
