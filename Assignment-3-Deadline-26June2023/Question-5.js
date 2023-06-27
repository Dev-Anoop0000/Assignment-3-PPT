console.log(`
Question-5 : You are given a large integer represented as an integer array digits, where each
digits[i] is the ith digit of the integer. The digits are ordered from most significant
to least significant in left-to-right order. The large integer does not contain any
leading 0's.

Increment the large integer by one and return the resulting array of digits.

**Example 1:**
Input: digits = [1,2,3]
Output: [1,2,4]

**Explanation:** The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4];
`);


/// Programmmmm.....

function addOne(array) {
    let n = array.length;
    for (let i = (n - 1); i >= 0; i--) {
        if (array[i] < 9) {
            array[i]++;
            console.log(array);
            return array;
        } else {
            array[i] = 0;
        }
    };

    array.unshift(1);
    return array;
};

const array = [1, 2, 3];
let incrementOne = addOne(array);

console.log("Output with increment of one : ", incrementOne);