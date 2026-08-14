class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length !== t.length) return false; 
        // If length doesn't match, they can't be anagrams.

        let charAsciiFreqDifference: Array<number> = new Array<number>(26).fill(0);
        const ASCII_BASE = 97;
        for(let i=0; i<s.length; i++){
            charAsciiFreqDifference[s.charCodeAt(i) - ASCII_BASE]++;
            charAsciiFreqDifference[t.charCodeAt(i) - ASCII_BASE]--;
        }
        return charAsciiFreqDifference.every(val => val==0)    
    }
}
