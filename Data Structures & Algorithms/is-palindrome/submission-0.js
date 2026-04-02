class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isAlphaNum(c) {
        //regex method
        let result = false;
        result = /^[a-zA-Z0-9]$/.test(c);
        return result;
    }
    isPalindrome(s) {
        // s = "Wo w";
        let lp = 0, rp = s.length - 1;
        while(lp < rp) {
            let l = s[lp], r = s[rp];
            // ignore non-alpha numeric
            // if non-alpha numeric, skip over
            if(!this.isAlphaNum(l)) {
                lp++;
            }
            else if(!this.isAlphaNum(r)) {
                rp--;
            }
            else {
            if(l.toLowerCase() === r.toLowerCase()) {
                lp++;
                rp--;
            } else {
                return false;
            }
            }
        }
        return true;
    }
}
