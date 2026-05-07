class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        bracket_map = {
            '(' : ')',
            '{':'}',
            '[':']'
        }
        for c in s:
            if c in bracket_map: # if opening bracket
                stack.append(c)
            else: # closing bracket
                if not stack:
                    return False # not valid since stack cant start with closing bracket
                else:
                    if c == bracket_map[stack[-1]]: # closing of the opening bracket on top
                        stack.pop() 
                    else: # wrong closing bracket, obv invalid string
                        return False
        return len(stack) == 0
        