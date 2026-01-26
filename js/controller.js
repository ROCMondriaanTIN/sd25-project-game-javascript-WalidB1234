


inzetInput.addEventListener("input", function () {
    inzetDisplay.innerText = "Inzet: " + inzetInput.value;
});


hogerBtn.addEventListener("click", function () {
    play(true);
});

lagerBtn.addEventListener("click", function () {
    play(false);
});