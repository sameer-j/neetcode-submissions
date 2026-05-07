class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        myMap: dict[int, int] = {}
        for n in nums:
            if n in myMap:
                return True
            else:
                myMap[n] = 1
        return False
