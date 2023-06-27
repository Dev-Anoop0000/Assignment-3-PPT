console.log(`
Question-4 : Given a sorted array of distinct integers and a target value, return the index if the
target is found. If not, return the index where it would be if it were inserted in
order.

You must write an algorithm with O(log n) runtime complexity.

Example 1:
Input: nums = [1,3,5,6], target = 5
Output: 2
`);


//// Programmm.....

let array = [1, 3, 5, 6, 7];
let target = 5;
let f = 0;
let l = array.length
let mid = Math.floor((f + l) / 2);
// console.log(mid);
while (f <= l) {
    if (array[mid] == target) {
        console.log("Target value found and it's index Number is : ", array[mid]);
        break;
    } else if (target > array[mid]) {
        f = mid + 1;
    } else {
        l = mid - 1;
    }
}