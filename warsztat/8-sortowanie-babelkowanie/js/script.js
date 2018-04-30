'use strict';
var array = [12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1];

function bubbleSorting(dataToSort) {
    var length = dataToSort.length;

    for (var i = (length - 1); i >= 0; i--) 
    {
        for (var j = (length - i); j > 0; j--) 
        {
            if (dataToSort[j] < dataToSort[j - 1]) 
            {
                var tmp = dataToSort[j];
                dataToSort[j] = dataToSort[j - 1];
                dataToSort[j - 1] = tmp;
            }
        }
    }

    return dataToSort;
}

console.log(bubbleSorting(array));
