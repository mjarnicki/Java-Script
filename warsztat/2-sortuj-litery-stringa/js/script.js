'use strict';
function stringSort(input)
{
    var sorted = input.split("").sort().join("");
    return sorted;
}
var toSort = "Akademia108";

console.log(stringSort(toSort));
