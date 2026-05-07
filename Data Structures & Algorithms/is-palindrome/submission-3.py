class Solution:
    def isPalindrome(self, s: str) -> bool:
        lp: int = 0
        rp: int = len(s) - 1
        while lp < rp:
            print(s[lp], s[rp])
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
    result = (c >= 'a' and c <= 'z') or (c >= 'A' and c <= 'Z') or (c >= '0' and c <= '9')
    print(result)
    if result:
        return True
    return False
