class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const parMap = {
            '(' : ')',
            '[' : ']',
            '{' : '}'
        }
        const stack = new Stack();
        for(let i = 0; i < s.length; i++) {
            if(stack.isEmpty()) {
                stack.push(s[i]);
            }
            else if(parMap[stack.top()] === s[i]) {
                stack.pop();
            } else {
                stack.push(s[i]);
            }
            console.log(stack.container);
        }
        if(stack.isEmpty()) {
            return true; // Valid
        }
        else {
            return false; // in valid
        }
    }
}

class Stack {
    constructor() {
        this.container = [];
    }

    push(newVal) {
        this.container.push(newVal);
    }

    pop() {
        return this.container.pop();
    }

    top() {
        return this.container[this.container.length - 1];
    }

    isEmpty() { 
        return this.container.length === 0; 
    }
}
