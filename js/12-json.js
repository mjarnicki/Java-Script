'use strict';

var jsonOsoby = {
    "osoby": [
        {
            imie: "Krystian",
            nazwisko: "Dziopa",
            wzrost: 180,
            oczy: "niebieskie",
            zainteresowania: [
                {
                    nazwa: "podroze"
                },
                {
                    nazwa: "gotowanie"
                }
            ]
        },
        {
            imie: "Dominik",
            nazwisko: "Gomuła",
            wzrost: 170,
            oczy: "brązowe",
            zainteresowania: [
                {
                    nazwa: "gotowanie"
                },
                {
                    nazwa: "języki"
                }
            ]
        },
        {
            imie: "Claudia",
            nazwisko: "Żelazowska",
            wzrost: 167,
            oczy: "brązowe",
            zainteresowania: [
                {
                    nazwa: "programowanie"
                },
                {
                    nazwa: "podroze"
                },
                {
                    nazwa: "języki"
                }
            ]

        }
    ]
}

//console.log(jsonOsoby.osoby[0].zainteresowania);



var dl = jsonOsoby.osoby.length;

for (var i = 0; i < dl; i++) {
  console.log(jsonOsoby.osoby[i].zainteresowania);
}

console.log(jsonOsoby.osoby[0].zainteresowania);
console.log(jsonOsoby.osoby[1].zainteresowania);
console.log(jsonOsoby.osoby[2].zainteresowania);

//jsonOsoby.osoby[2].zainteresowania.forEach( function (element, index) {
//    console.log(element.nazwa);
//});
//
//console.log(jsonOsoby.osoby[2].zainteresowania);







//jsonOsoby.osoby[0].zainteresowania.forEach( function(zainteresowanie, index) {
//    console.log("index: " + index + " zainteresowanie: " + zainteresowanie.nazwa)
//});
