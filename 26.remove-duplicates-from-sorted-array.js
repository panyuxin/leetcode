/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (!nums) {
        return 0;
    }

    let lastNumIndex = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[lastNumIndex]) {
            lastNumIndex++;
            nums[lastNumIndex] = nums[i];
        }
    }

    return lastNumIndex + 1;
};
// @lc code=end

