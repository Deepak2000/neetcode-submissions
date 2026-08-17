class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        const set = new Set<string>();
        let lPtr:number=0, rPtr:number=0;
        let longest = 0;

        while(rPtr<s.length){
            if(!set.has(s[rPtr])){
                set.add(s[rPtr]);
                longest = Math.max(longest, rPtr-lPtr+1);
                rPtr++;
            }else{
                set.delete(s[lPtr]);
                lPtr++;
            }
        }

        return longest;
    }
}
