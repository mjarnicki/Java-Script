'use strict';
var jsonPracownicy = {
    "pracownicy": [
        {
            "firstName": "Krystian",
            "lastName": "Dziopa"
        },
        {
            "firstName": "Anna",
            "lastName": "Szapiel"
        },
        {
            "firstName": "Piotr",
            "lastName": "Żmuda"
        }
    ]
};
console.log("Cała tablica");
console.log(jsonPracownicy.pracownicy);

var leng = jsonPracownicy.pracownicy.length;

console.log("pętla FOR:");
for (var i = 0; i < leng; i++) {
    console.log("Index " + i + " Imię: " + jsonPracownicy.pracownicy[i].firstName + " Nazwisko: " + jsonPracownicy.pracownicy[i].lastName);
};
console.log("pętla forEach:");
jsonPracownicy.pracownicy.forEach(function (element, index) {
    console.log("Osoba z Indexem: " + index + " ma na imię " + element.firstName + ". na nazwisko " + element.lastName);
});
