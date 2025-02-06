
/* 
* Second Largest

* Given an array of positive integers arr[], return the second largest element from the array. If the second largest element doesn't exist then return -1.
* Note: The second largest element should not be equal to the largest element.

*/

function getSecondLargest(arr) {

    if (arr.length < 2) return -1;

    let first = -Infinity, second = -Infinity;
    for (let n of arr) {
        if (n > first) {
            second = first;
            first = n;
        }
        else if (n > second && n !== first) {
            second = n;
        }
    }

    return second === -Infinity ? -1 : second;

}

output = getSecondLargest([10, 10, 10])
console.log(output)


