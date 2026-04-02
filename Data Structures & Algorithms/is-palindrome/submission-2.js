class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isAlphaNum(c) {
        //regex method
        // let result = false;
        // result = /^[a-zA-Z0-9]$/.test(c);
        // return result;

        //ascii method
        // const code = c.charCodeAt(0);
        // const isDigit = code >=48 && code <=57;
        // const isLower = code >= 65 && code <=90;
        // const isUpper = code >= 97 && code <= 122;

        // return isDigit || isLower || isUpper; 

        // direct character compare
        const isD = c >= '0' && c <= '9';
        const isL = c >= 'a' && c <= 'z';
        const isU = c >= 'A' && c <= 'Z';

        return isD || isL || isU;
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
