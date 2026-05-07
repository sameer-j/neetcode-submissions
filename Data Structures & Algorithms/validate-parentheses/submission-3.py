class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        map = {
            '(' : ')',
            '{':'}',
            '[':']'
        }
        for c in s:
            if c in map: # if opening bracket
                stack.append(c)
            else: # closing bracket
                if len(stack) == 0:
                    return False # not valid since stack cant start with closing bracket
                else:
                    if c == map[stack[-1]]: # closing of the opening bracket on top
                        stack.pop() 
                    else: # wrong closing bracket, obv invalid string
                        return False
        if len(stack) == 0:
            return True
        else:
            return False
        