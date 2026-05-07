class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];
        let bracket_map = {
            '(' : ')',
            '[' : ']',
            '{' : '}'
        };

        for(let c of s) {
            if(c in bracket_map) {
                stack.push(c);
            }
            else {
                if(!stack || bracket_map[stack[stack.length -1]] != c) {
                    return false;
                }
                stack.pop();
            }
        }
        return stack.length == 0;
    }
}
