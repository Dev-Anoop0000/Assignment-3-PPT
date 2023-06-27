console.log(`
Question-7 : You are given an inclusive range [lower, upper] and a sorted unique integer array
nums, where all elements are within the inclusive range.

A number x is considered missing if x is in the range [lower, upper] and x is not in
nums.

Return the shortest sorted list of ranges that exactly covers all the missing
numbers. That is, no element of nums is included in any of the ranges, and each
missing number is covered by one of the ranges.

Example 1:
Input: nums = [0,1,3,50,75], lower = 0, upper = 99
Output: [[2,2],[4,49],[51,74],[76,99]]

Explanation: The ranges are:
[2,2]
[4,49]
[51,74]
[76,99]
`);

////// Programmmmm.....

function findMissingRanges(nums, lower, upper) {
    const result = [];

    const formatRange = (start, end) => {
        return start === end ? start.toString() : `${start}->${end}`;
    };

    if (nums[0] > lower) {
        result.push(formatRange(lower, nums[0] - 1));
    }

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] - nums[i - 1] > 1) {
            result.push(formatRange(nums[i - 1] + 1, nums[i] - 1));
        }
    }

    if (nums[nums.length - 1] < upper) {
        result.push(formatRange(nums[nums.length - 1] + 1, upper));
    }

    return result;
}


const nums = [0, 1, 3, 50, 75];
const lower = 0;
const upper = 99;

const missingRanges = findMissingRanges(nums, lower, upper);
console.log("Found missing ranges : ", missingRanges);