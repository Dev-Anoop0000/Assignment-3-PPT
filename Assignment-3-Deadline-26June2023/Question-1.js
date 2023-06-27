console.log(`
Question-1 : Given an integer array nums of length n and an integer target, find three integers
in nums such that the sum is closest to the target.
Return the sum of the three integers.

You may assume that each input would have exactly one solution.

Example 1:
Input: nums = [-1,2,1,-4], target = 1
Output: 2

Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
`);

//programmmm......

function threeSumClosest(nums, target) {
    // Sort the input array in ascending order
    nums.sort((a, b) => a - b);

    let closestSum = Infinity;
    // console.log(closestSum)

    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum === target) {
                // If the sum is equal to the target, return the sum immediately
                return sum;
            }

            // Update the closestSum if the current sum is closer to the target
            if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
                closestSum = sum;
                // console.log("abs Hello", Math.abs(closestSum - target))
                // console.log("abs Hello sum", Math.abs(sum - target))
            }

            if (sum < target) {
                left++;
            } else {
                right--;
            }
        }
    }

    return closestSum;
}


const nums = [-1, 2, 1, -4];
const target = 1;

const closestSum = threeSumClosest(nums, target);
console.log("Output : ", closestSum); // Output: 2