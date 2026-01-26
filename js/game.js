let nummer = 0;
let oudeNummer = 0;
let score = 0;
let inzetWaarde = 0;
let saldo = 100;
const roll = () => Math.floor(Math.random() * 6) + 1;

const startGame = () => {
    nummer = roll();
    oudeNummer = roll();
};
//controleert of getal hoger is
const play = (isHoger) => {
    // Controleer of de speler nog geld heeft
    if (saldo <= 0) {
        showMessage("Game Over");
        return;
    }

    // controleer of de speler heeft ingezet
    if (!inzetWaarde) {
        showMessage("Zet eerst in");
        return;
    }
    // bepaalt of de speler heeft gewonnen
    const gewonnen = isHoger
    nummer > oudeNummer;
    nummer < oudeNummer;

    // controleert de uitslag
    if (nummer == oudeNummer) {
        showMessage("Gelijk");
    } else if (gewonnen) {
        showMessage("Goed");
        score++;
        saldo += inzetWaarde;
    } else {
        showMessage("Fout");
        if (score > 0) score--;
        saldo -= inzetWaarde;
    }
    // reset de inzet en het input veld
    inzetWaarde = 0;
    inzetInput.value = "";

    // update het scherm met nieuw saldo en score
    updateSaldoDisplay();
    if (scoreElement) scoreElement.innerHTML = score;

    // rollt een nieuw random getal
    oudeNummer = nummer;
    nummer = roll();
    nummerDisplay.innerHTML = oudeNummer;
};
// Functie om in te zetten
const inzet = () => {
    const bedrag = Number(inzetInput.value);

    // Controleer of het bedrag hoger is dan de saldo
    if (!bedrag || bedrag > saldo) {
        showMessage("Ongeldige inzet");
        return;
    }
    inzetWaarde = bedrag;
};
