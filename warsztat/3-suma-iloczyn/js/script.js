'use strict';

function calculator(array) {
    var multip = 1;
    var addit = 0;
    for (var i = 0; i < array.length; i++) {
        multip = multip * array[i];
        addit = addit + array[i];
    }
    var result = ("Wynik mnożenia to " + multip + ". Wynik dodawania to " + addit + ".");
    return result;
}

var data = [1, 2, 3, 4, 5, 6];

console.log(calculator(data));
