"use strict";
const imgref = document.getElementById("Img");
function MouseIn() {
    const valref = document.getElementsByName("val");
    valref.forEach((radio) => {
        radio.addEventListener("change", () => {
            const sel = radio;
            if (sel.checked) {
                imgref.src = `${sel.value}.png`;
            }
        });
    });
}
