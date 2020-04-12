'use strict';

function binarySearch(list, item) {
    let low = 0; 
    let high = list.length - 1; 

    while (low <= high) {
        let middle = Math.floor(low + high) / 2; // Identifies the index of element in center of the list;
        guess = list[middle];

        if (guess === item) {
            return middle;
        } else if (guess > item) {
            high = middle - 1;
        } else {
            low = middle + 1;
        }
    }

    return null;
}

mylist = [1,2,4,7,10];

console.log(binarySearch(mylist,7)); // 3
console.log(binarySearch(mylist,-1)); // null