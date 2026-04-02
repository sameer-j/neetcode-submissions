class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const myset = new Set(nums);
        if(nums.length > myset.size) {
            return true
        }
        return false
    }
}
