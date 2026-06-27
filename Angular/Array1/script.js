var but = document.getElementById("button");
var result = document.getElementById("res");
var naref = document.getElementById("name");
var numref = document.getElementById("num");
var arr = [];
var Odd = function () {
    naref.innerHTML = "Odd :";
    result.innerText = "".concat(arr.filter(function (val) { return val % 2 == 0; }).join("  ,  "));
};
var Even = function () {
    naref.innerHTML = "Even :";
    result.innerText = "".concat(arr.filter(function (val) { return val % 2 != 0; }).join("  ,  "));
};
var Filter = function () {
    naref.innerHTML = "Filter :";
    result.innerText = "".concat(arr.filter(function (val) { return val > parseInt(numref.value); }).join("  ,  "));
};
var Add = function () {
    var num = parseInt(numref.value);
    arr.push(num);
    numref.value = "";
    naref.innerHTML = "Add :";
    result.innerHTML = "Element Add Successfully.";
};
var pow = function () {
    var power = arr.map(function (i) { return i * i; });
    naref.innerHTML = "Power";
    result.innerHTML = "".concat(power);
};
var Delete = function () {
    naref.innerHTML = "Delete Last Element :";
    if (arr.length == 0) {
        result.innerHTML = 'All Array Element are Delete';
        return;
    }
    result.innerText = "Delete Element : ".concat(arr.pop());
};
var Display = function () {
    naref.innerHTML = "Display";
    result.innerHTML = "Array Element : ".concat(arr.join("  ,  "));
};
var pass = function () {
    naref.innerHTML = "Passitive OR Negative :";
    var re = arr.every(function (val) { return 0 < val; });
    if (re) {
        result.innerHTML = "The all element are Passitive";
    }
    else {
        result.innerHTML = "any one element are Negative";
    }
};
var fun = [Display, Delete, Odd, Even, Filter, pow, pass];
var op = ["Display", "Delete", "Odd", "Even", "Filter", "Power", "Passitive or Negative"];
op.forEach(function (val, index) {
    var button = document.createElement('input');
    button.name = "Array";
    button.type = "radio";
    button.onclick = function () {
        fun[index]();
    };
    button.innerText = val;
    button.className = "w-3 h-3 m-1 p-2";
    var lab = document.createElement('label');
    lab.className = "text-lg";
    lab.innerHTML = val;
    but.appendChild(button);
    but.appendChild(lab);
});
