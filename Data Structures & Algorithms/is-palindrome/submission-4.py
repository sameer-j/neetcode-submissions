class Solution:
    def isPalindrome(self, s: str) -> bool:
        lp: int = 0
        rp: int = len(s) - 1
        while lp < rp:
            l = s[lp].lower()
            r = s[rp].lower()
            if not isAlphaNum(l):
                lp += 1
            elif not isAlphaNum(r):
                rp -= 1
            elif l == r:
                lp += 1
                rp -= 1
            else:
                return False
        return True


def isAlphaNum(c: str) -> bool:
    result = (c >= 'a' and c <= 'z') or (c >= '0' and c <= '9')
    return result
