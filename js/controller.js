


inzetInput.addEventListener("input", function () {
    inzetDisplay.innerText = "Inzet: " + inzetInput.value;
});

inzetInput.addEventListener("change", function () {
    inzet();
});


hogerBtn.addEventListener("click", function () {
    play(true);
});

lagerBtn.addEventListener("click", function () {
    play(false);
});