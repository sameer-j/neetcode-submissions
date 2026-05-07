class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        iMap: dict[int, int] = {}
        for i, n in enumerate(nums):
            complement = target - n
            if complement in iMap:
                return [iMap[complement], i]
            iMap[n] = i
        return []