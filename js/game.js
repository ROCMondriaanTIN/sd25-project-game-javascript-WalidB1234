

const MAX_SCORE = 100;
let nummer = 0,
    oudeNummer = 0,
    score = 0,
    inzetWaarde = 0,
    saldo = 100;
const roll = () => Math.floor(Math.random() * 6) + 1;

const startGame = () => {
    nummer = roll();
    oudeNummer = roll();
};

const play = (isHoger) => {
    if (saldo <= 0) {
        alert("Game Over! Start een nieuw spel.");
        return;
    }

    if (score >= MAX_SCORE) {
        showMessage('Je hebt gewonnen! Max score bereikt!');
        setTimeout(() => {
            resetGame();
        }, 2000);
        return;
    }

    if (!inzetWaarde) {
        alert("Zet eerst een bedrag in!");
        return;
    }

    const win = isHoger ? nummer > oudeNummer : nummer < oudeNummer;

    if (nummer === oudeNummer) {
        showMessage('zelfde number');
    } else if (win) {
        showMessage('Goed');
        score++;
        saldo += inzetWaarde;
        if (saldo > 100) saldo = 100;
    } else {
        showMessage('Fout');
        if (score > 0) score--;
        saldo -= inzetWaarde;
    }

    updateSaldoDisplay();
    inzetWaarde = 0;
    inzetInput.value = "";
    inzetDisplay.innerText = "";

    if (saldo <= 0) {
        showMessage('Game Over! Geen saldo meer.');
        setTimeout(() => {
            resetGame();
        }, 2000);
        return;
    }

    setTimeout(() => {
        oudeNummer = nummer;
        nummer = roll();
        nummerDisplay.innerHTML = oudeNummer;
        nummerDisplay2.innerHTML = '?';
        if (scoreElement) scoreElement.innerHTML = score;
    }, 1500);
};

const inzet = () => {
    const betAmount = parseInt(inzetInput.value);
    if (betAmount <= 0 || isNaN(betAmount)) {
        alert("Voer een geldig bedrag in");
        return;
    }
    if (saldo < betAmount) {
        alert("Niet genoeg saldo");
        return;
    }
    inzetWaarde = betAmount;
};

const resetGame = () => {
    score = 0;
    saldo = 100;
    inzetWaarde = 0;
    inzetInput.value = "";
    inzetDisplay.innerText = "";
    if (scoreElement) scoreElement.innerHTML = score;
    if (saldoText) saldoText.innerHTML = saldo;
    startGame();
    nummerDisplay.innerHTML = nummer;
    nummerDisplay2.innerHTML = '?';
};