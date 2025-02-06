

// Given an array arr[]. Rotate the array to the left (counter-clockwise direction) by d steps,
// where d is a positive integer. 

// Note: Consider the array as circular.

/**
 * @param {number[]} arr
 * @param {number} d
 */

// Input: arr[] = [1, 2, 3, 4, 5], d = 2
// Output: [3, 4, 5, 1, 2]

// class Solution {
    function rotateArr(arr, d) {
        const len = arr.length
        if(d === 0 || d === len) {
            console.log(arr)
            return arr
        }
        // for the case that the d > len
        d %= len
        const rotatedArr = arr.slice(d).concat(arr.slice(0, d))
        console.log(rotatedArr)
        return rotatedArr
    }
// }

rotateArr([1, 2, 3, 4, 5], 2)

