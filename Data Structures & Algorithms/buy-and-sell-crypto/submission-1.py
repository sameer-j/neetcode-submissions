class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        maxSellingPrice = 0
        maxP = 0
        for p in reversed(prices):
            maxSellingPrice = max(maxSellingPrice, p)
            maxP = max(maxSellingPrice-p, maxP)
        return maxP
