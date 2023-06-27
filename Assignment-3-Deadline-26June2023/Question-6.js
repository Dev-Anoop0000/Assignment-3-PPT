console.log(`
    Question-6 : Given a non-empty array of integers nums, every element appears twice except
for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only
constant extra space.

Example 1:
Input: nums = [2,2,1]
Output: 1
`);


/// Programmmm ......



function findSingleNumber(nums) {
    let result = 0;

    for (let i = 0; i < nums.length; i++) {
        result ^= nums[i];

    }

    return result;
}


const nums = [2, 2, 1, 1, 3];
const singleNumber = findSingleNumber(nums);
console.log("Found the single element : ", singleNumber);