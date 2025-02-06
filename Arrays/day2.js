
// * Move all the zeros to the end 
// * So for this problem my approach will by swapping the non zero numeber with the zero within a single iteration  

// * Given an array arr[]. Push all the zeros of the given array to the right end of the array while maintaining the order of non-zero elements. Do the mentioned change in the array in place.

function  pushZerosToEnd(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            let temp = arr[i];
            arr[i] = arr[count];
            arr[count] = temp;
            count++; 
        }
    }
    return arr
}

// const arr = [1, 2, 0, 4, 3, 0, 5, 0]
// const arr = [10, 20, 30]
// const arr = [0, 0, 0, 1]
    
// console.log(pushZerosToEnd(arr))









