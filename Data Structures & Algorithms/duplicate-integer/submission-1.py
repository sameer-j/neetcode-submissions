class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        mySet: set[int] = set(nums)
        return True if len(mySet) != len(nums) else False
        