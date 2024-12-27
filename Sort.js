//Insertion Sort
// class InsertionSort {
//     static sort(arr) {
//         for (let i = 1; i < arr.length; i++) {
//             let current = arr[i];
//             let j = i - 1;

//             while (j >= 0 && arr[j] > current) {
//                 arr[j + 1] = arr[j];
//                 j--;
//             }

//             arr[j + 1] = current;
//         }

//         return arr;
//     }
// }

// // Example usage:
// const array = [5, 2, 4, 6, 1, 3];
// const sortedArray = InsertionSort.sort(array);
// console.log(sortedArray); // Output: [1, 2, 3, 4, 5, 6]

// Merge Sort
class MergeSort {
    static sort(arr) { 
        if (arr.length <= 1) {
            return arr;
        }

        const mid = Math.floor(arr.length / 2); // Find the middle of the array
        const left = arr.slice(0, mid); // Divide the array into two halves
        const right = arr.slice(mid);   // Divide the array into two halves

        return this.merge(this.sort(left), this.sort(right));
    }

    static merge(left, right) { // Merge the two arrays: left and right
        let result = [];
        let i = 0;
        let j = 0;

        while (i < left.length && j < right.length) { // Compare the elements of the two arrays
            if (left[i] < right[j]) {
                result.push(left[i]);
                i++;
            } else {
                result.push(right[j]);
                j++;
            }
        }

        return result.concat(left.slice(i)).concat(right.slice(j)); // Concatenate the remaining elements of left and right
    }
}

// Example usage:
const array = [5, 2, 4, 6, 1, 3];
const sortedArray = MergeSort.sort(array);
console.log(sortedArray); // Output: [1, 2, 3, 4, 5, 6]