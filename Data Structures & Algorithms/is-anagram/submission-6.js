class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const sObj = {}
        if(s.length !== t.length) {
            return false
        }
        for(let i = 0; i < s.length; i++) {
            sObj[s[i]] = (sObj[s[i]] || 0) + 1;
        }
        for(let i = 0; i < t.length; i++) {
            // console.log(t[i])
            // console.log('current', sObj)
            if(t[i] in sObj) {
                if(sObj[t[i]] > 1) {
                    sObj[t[i]] = sObj[t[i]] - 1;
                }
                else {
                    delete sObj[t[i]];
                }
            } else {
                return false
            }
            // console.log('after change', sObj)
        }
        if(sObj && Object.keys(sObj).length == 0) {
            return true
        } else {
            return false;
        }
    }
}
