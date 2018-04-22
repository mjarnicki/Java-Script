'use strict';
var imiona = ["Monika", "Krystian", "Łukasz"];

imiona[3] = "Tania";
imiona[2] = "Ela";

console.log(imiona);

imiona.push("Geralt");

console.log(imiona);

imiona.pop();
imiona.pop();

console.log(imiona);

console.log(imiona.shift("robert"));

console.log(imiona);

imiona.unshift("Robert");

console.log(imiona);
console.log(imiona.length);

console.log(imiona.join(" "));

imiona.reverse();
console.log(imiona);
var liczby = [22, 33, 4, 6, 7, 22, 666, 345];

console.log(liczby.sort());