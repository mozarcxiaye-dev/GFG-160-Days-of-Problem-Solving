

// * Reversing an array
// * You are given an array of integers arr[]. Your task is to reverse the given array.

// * Approach
// * Create two pointers one for the first element and another for the last element then swap the numbers now increment the left and decrement the right by one until the condition left < right satisfies 

function reverseArray(arr) {
    let left = 0, 
        right = arr.length - 1;

    while (left < right) {
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;

        left++;
        right--;
    }
    return arr;
}
// const arr = [4, 5, 2]
// const arr = [1];
// const arr = [1, 4, 3, 2, 6, 5]
// const output = reverseArray(arr);
// console.log(output)