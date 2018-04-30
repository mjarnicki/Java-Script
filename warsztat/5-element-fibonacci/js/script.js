'use strict';

function fibonacci(value) {
    if (value === 0) return 0;
    else if (value === 1) return 1;
    else if (value > 1) {
        var wynik = fibonacci(value - 1) + fibonacci(value - 2);
    }
    return wynik;
    
}


console.log(fibonacci(16));

