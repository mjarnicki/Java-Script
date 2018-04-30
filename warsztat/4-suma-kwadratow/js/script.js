'use strict';

function calculator(array) {
    var additPow = 0
    for (var i = 0; i < array.length; i++) {
        var power = Math.pow(array[i], 2);
        additPow = additPow + power;
    }
    var result = ("Suma kwadratów tablicy to " + additPow + ".");
    return result;
}

var data = [0,1,2,3,4,5];

console.log(calculator(data));

