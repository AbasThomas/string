// Array-1 -- maxEnd3
// Given an array of ints length 3, figure out which is larger, the first or last element in the array, and set all the other elements to be that value. Return the changed array.

// Examples

// maxEnd3([1, 2, 3]) → 3,3,3
// maxEnd3([11, 5, 9]) → 11,11,11
// maxEnd3([2, 11, 3]) → 3,3,3

function maxEnd3(nums){
    let max = Math.max(nums[0], nums[nums.length - 1]);
    nums.fill(max);
    return nums;
}