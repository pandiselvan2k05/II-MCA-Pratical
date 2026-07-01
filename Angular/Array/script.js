"use strict";
const but = document.getElementById("button");
const result = document.getElementById("res");
const naref = document.getElementById("name");
const numref = document.getElementById("num");
const arr = [1];
const Odd = () => {
    naref.innerHTML = "Odd :";
    result.innerText = `${arr.filter((val) => val % 2 == 0).join("  ,  ")}`;
};
const Even = () => {
    naref.innerHTML = "Even :";
    result.innerText = `${arr.filter((val) => val % 2 != 0).join("  ,  ")}`;
};
const Filter = () => {
    naref.innerHTML = "Filter :";
    result.innerText = `${arr.filter((val) => val > parseInt(numref.value)).join("  ,  ")}`;
};
const Add = () => {
    const num = parseInt(numref.value);
    arr.push(num);
    naref.innerHTML = "Add :";
    result.innerHTML = `Element Add Successfully.`;
};
const Delete = () => {
    naref.innerHTML = "Delete Last Element :";
    if (arr.length == 0) {
        result.innerHTML = 'All Array Element are Delete';
        return;
    }
    result.innerText = `Delete Element : ${arr.pop()}`;
};
const Display = () => {
    naref.innerHTML = "Display";
    result.innerHTML = `Array Element : ${arr.join("  ,  ")}`;
};
const fun = [Add, Display, Delete, Odd, Even, Filter];
const op = ["Add", "Display", "Delete", "Odd", "Even", "Filter"];
op.forEach((val, index) => {
    const button = document.createElement('button');
    button.textContent = val;
    button.onclick = () => {
        fun[index]();
    };
    button.className = "border-2 w-25 h-10 b-2 m-2 bg-[#FF3333] cursor-pointer text-white rounded-xl hover:text-black hover:bg-[#47CC00] border-2 border-black transaction hover:scale-105 ";
    but.appendChild(button);
});
