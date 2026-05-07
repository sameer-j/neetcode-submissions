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
                if not stack or c != bracket_map[stack[-1]] :
                    return False 
                stack.pop() 

        return len(stack) == 0
        