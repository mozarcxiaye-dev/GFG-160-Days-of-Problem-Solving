
const reverseArray = require('./ReverseArray')
// Problem Name : Next Permutation

function NextPermutation(arr) {
    // we will be needing pivot for this problem
    // lets initialize the pivot to -1

    let pivot = -1
    let n = arr.length
    // if the array is not descending, find the pivot element
    // traverse the array from backward
    for (let i = n - 1; i >= 0; i--) {
        if (arr[i - 1] < arr[i]) {
            pivot = i - 1
            break
        }
    }
    // the pivot is -1 for the array that are already in descending order
    if (pivot === -1) {
        // reverse the array
        let left = 0, right = n - 1
        while (left < right) {
            let temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
    
            left++;
            right--;
        }
        return arr;        
    }

    // once the pivot element is identified swap the pivot with the nearest large number (from right to pivot)
    for(let i = n -1; i > 0; i--) {
        if(arr[i] > arr[pivot]) {
            let temp = arr[pivot]
            arr[pivot] = arr[i]
            arr[i] = temp
            break
        }
    }

    // now reverse the array from pivot to the end
    let left = pivot + 1, right = n - 1
    while (left < right) {
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;

        left++;
        right--;
    }
    return arr
}


const test1 = NextPermutation([3, 2, 1])
const test2 = NextPermutation([1, 2, 3, 6, 5, 4]) // [1, 4, 6, 5, 3]
const test3 = NextPermutation([1, 2, 3, 4]) // [1, 2, 4, 3]
// const test4 = NextPermutation([2, 4, 5, 0, 1, 7]) // [2, 5, 0, 1, 4, 7]
const test5 = NextPermutation([2, 4, 1, 7, 5, 0]) // [2, 4, 5, 0, 1, 7]


console.log(test1)
console.log(test2)
console.log(test3)
// console.log(test4)
console.log(test5)


