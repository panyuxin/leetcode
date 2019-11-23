/*
 * @lc app=leetcode id=88 lang=javascript
 *
 * [88] Merge Sorted Array
 *
 * https://leetcode.com/problems/merge-sorted-array/description/
 *
 * algorithms
 * Easy (37.38%)
 * Likes:    1437
 * Dislikes: 3263
 * Total Accepted:    449.5K
 * Total Submissions: 1.2M
 * Testcase Example:  '[1,2,3,0,0,0]\n3\n[2,5,6]\n3'
 *
 * Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as
 * one sorted array.
 * 
 * Note:
 * 
 * 
 * The number of elements initialized in nums1 and nums2 are m and n
 * respectively.
 * You may assume that nums1 has enough space (size that is greater or equal to
 * m + n) to hold additional elements from nums2.
 * 
 * 
 * Example:
 * 
 * 
 * Input:
 * nums1 = [1,2,3,0,0,0], m = 3
 * nums2 = [2,5,6],       n = 3
 * 
 * Output: [1,2,2,3,5,6]
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let tail = nums1.length - 1;
    let p1 = m - 1;
    let p2 = n - 1;
    
    while (p1 >= 0 && p2 >= 0) {
        nums1[tail--] = Math.max(nums1[p1], nums2[p2]);
        nums1[p1] >= nums2[p2] ? p1-- : p2--;
    }

    while (p2 >= 0) {
        nums1[tail--] = nums2[p2--];
    }
};
// @lc code=end

