class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let myMap = {}
        for(let n of nums) {
            if(n in myMap) {
                return true
            }
            myMap[n] = 1
        }
        return false
    }
}
