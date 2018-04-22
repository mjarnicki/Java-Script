'use strict';

//iloczyn trzech liczb

function iloczyn(z1, z2, z3)
{
    var wynik = z1 * z2 * z3;
    return wynik;
}

console.log(iloczyn(2, 2, 2));


//silnia
function silnia(wpisz) {
    var wynik = 1;
    for (var i = 1; i <= wpisz; i++) {
        wynik = wynik * i;
    }

    return wynik;
}
console.log(silnia(4));
