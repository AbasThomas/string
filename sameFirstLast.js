// Array-1 -- sameFirstLast
// Given an array of ints, return true if the array is length 1 or more, and the first element and the last element are equal.

// Examples

// sameFirstLast([1, 2, 3]) → false
// sameFirstLast([1, 2, 3, 1]) → true
// sameFirstLast([1, 2, 1]) → true
function sameFirstLast(nums){
    // return nums[0] === 6 || nums[nums.length - 1] === 6;
    if (nums[0] == nums[nums.length - 1]){
        return true;
    }
    else if (nums.length = 0){
        return false;
    }
    else{
        return false;
    }
    // return true ?  : false || nums.length = 0;
}

console.log(sameFirstLast([])) // false