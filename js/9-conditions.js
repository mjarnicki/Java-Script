'use strict';
var wzrostMateusza = 190;
var wzrostOli = 190;

if (wzrostOli > wzrostMateusza)
    {
        console.log("Olga jest wyższa!!!");
    }
else if (wzrostOli < wzrostMateusza)
    {
        console.log("Olga jest niższa");
    }
else 
    {
        console.log("Są tego samego wzrostu.");
    }

var kolor = "zielony";

switch (kolor){
    case "czerwony":
    console.log("kolor czerwony")
    break;
case "zielony":
    console.log("kolor zielony")
    break;
case "niebieski":
    console.log("kolor niebieski")
    break;
    default:
    console.log("Inny kolor")
}