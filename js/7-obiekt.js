/*'use strict';
var kaja={
    'use strict';
    imie: "Kaja",
    wzrost: 152,
    przedstawOsobe: function(){
     console.log("Ten obiekt ma na imię: " + this.imie);   
    }
}
var krystian={
    imie: "Krystian",
    wzrost: 180,
    przedstawOsobe: function(){
     console.log("Ten obiekt ma na imię: " + this.imie);   
    }
}
kaja.przedstawOsobe();
krystian.przedstawOsobe();

console.log(kaja.wzrost);*/

class Osoba {
    constructor(imie, nazwisko) {
        this.imie = imie;
        this.nazwisko = nazwisko;
    }
    wyswietlInfo(){
        console.log("Nazywam się: " + this.imie + " " + this.nazwisko);
    }
}
var agata = new Osoba("Agata", "Biesaga");
var agata = new Osoba("Marcin", "Kwiatkowski");

console.log(agata.imie);
console.log(marcin.imie);

agata.wyswietlInfo();
