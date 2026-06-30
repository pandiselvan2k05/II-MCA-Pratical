"use strict";
const optionals = ["%", "AC", "Del", "=", "7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "+", "0", ".", "(", ")"];
const optional = document.getElementById("op");
optionals.forEach(op => {
    const But = document.createElement("p");
    But.innerText = `${op}`;
    But.id = op.toString();
    But.className = " flex justify-center items-center cursor-pointer w-20 h-15 border-2 bg-white text-lg rounded-xl";
    optional.appendChild(But);
});
