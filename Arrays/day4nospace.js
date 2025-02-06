// in case the mentioned change needs to be done in the array in place.

function rotateArr(arr, d) {

    const n = arr.length; // length of array
    if (n === 0) return; //if array is empty simply return

    d %= n; // Handle cases where d > n
    const reverse = (arr, start, end) => {
        while (start < end) {
            [arr[start], arr[end]] = [arr[end], arr[start]];
            start++;
            end--;
        }
    };

    reverse(arr, 0, d - 1); // Step 1
    reverse(arr, d, n - 1); // Step 2
    reverse(arr, 0, n - 1); // Step 3

    return arr;
}

console.log(rotateArr([1, 2, 3, 4, 5], 2))