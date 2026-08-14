class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length !== t.length) return false; 
        // If length doesn't match, they can't be anagrams.

        let charAsciiNormalized_s: Array<number> = new Array<number>(26).fill(0);
        let charAsciiNormalized_t: Array<number> = new Array<number>(26).fill(0);
        const ASCII_BASE = 97;

        for(const char of s){
            const ascii = char.charCodeAt(0);
            const idx = ascii - ASCII_BASE;
            charAsciiNormalized_s[idx]++;
        }
        for(const char of t){
            const ascii = char.charCodeAt(0);
            const idx = ascii - ASCII_BASE;
            charAsciiNormalized_t[idx]++;
        }
        // console.log(charAsciiNormalized_s);
        // console.log(charAsciiNormalized_t);
        for(let i=0; i<charAsciiNormalized_s.length; i++){
            if(charAsciiNormalized_s[i] != charAsciiNormalized_t[i]){
                return false;
            }
        }        
        return true;
    }
}
