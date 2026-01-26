// Controller - Event listeners and user interaction

const setupInzet = () => {
    inzetInput.addEventListener("keyup", () => {
        inzetDisplay.innerText = `Inzet: ${inzetInput.value}`;
    });
};

document.addEventListener('DOMContentLoaded', () => {
    setupInzet();
    if (hogerBtn) hogerBtn.addEventListener('click', () => play(true));
    if (lagerBtn) lagerBtn.addEventListener('click', () => play(false));
});
