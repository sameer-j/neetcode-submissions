class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        sMap: dict[str, int] = {}
        for c in s:
            sMap[c] = sMap.get(c, 0) + 1
        
        for c in t:
            if c in sMap:
                sMap[c] -= 1
                if sMap[c] == 0:
                    del sMap[c]
            else:
                return False
        return len(sMap) == 0