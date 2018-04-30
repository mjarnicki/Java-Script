'use strict';
class Ksiazka {
    constructor(tytul, autor, czyPrzeczytana) {
        this.tytul = tytul;
        this.autor = autor;
        this.czyPrzeczytana = czyPrzeczytana;
    }
    opiszKsiazke() {
        var czytane = "";

        if (this.czyPrzeczytana == true) {
           var czytane = ""
        }
        else if(this.czyPrzeczytana == false) {
            czytane = "nie"
        };
        
        console.log("Książka ma tytuł " + this.tytul + ", autorem jest " + this.autor + " i " + czytane + " została przeczytana.")
    }
}

var wiedzmin = new Ksiazka("Wiedźmin", "Andrzej Sapkowski", false);

var hobbit = new Ksiazka("Hobbit", "J. R. R. Tolkien", false);

var harryPotter = new Ksiazka("Harry Potter", "J. K. Rowling", true);

var wszystkieKsiazki = [wiedzmin, hobbit, harryPotter];


function iloscPrzeczytanych(tablica) {
    var takPrzeczytana = 0;
    for (var i = 0; i < tablica.length; i++) {
        var opis = tablica[i].opiszKsiazke();
        var przeczytana = tablica[i].czyPrzeczytana;

        if (tablica[i].czyPrzeczytana == true) {
            takPrzeczytana++
        }
    };
    return takPrzeczytana;
};

console.log("Ilość przeczytanych książek: " + iloscPrzeczytanych(wszystkieKsiazki));
