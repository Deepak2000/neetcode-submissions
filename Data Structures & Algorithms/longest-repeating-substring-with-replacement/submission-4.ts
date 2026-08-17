class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        const freqMap = new Map<string, number>();
        let lPtr:number=0, rPtr:number=0;
        let longest = 0;
        while(rPtr < s.length){
            freqMap.set(s[rPtr], (freqMap.get(s[rPtr]) || 0)  + 1);
            const windowWidth = rPtr-lPtr+1;
            const maxFreq = this.getMaxFromSet(freqMap);
            if(windowWidth - maxFreq <= k){
                longest = Math.max(longest, windowWidth);
            }else{
                freqMap.set(s[lPtr], freqMap.get(s[lPtr]) - 1);
                lPtr++;
            }
            rPtr++;
        }
        return longest;
    }

    getMaxFromSet(map: Map<string, number>): number{
        let maxFreq = 0;
        for(const [_, freq] of map){
            if(freq > maxFreq) maxFreq = freq;
        }
        return maxFreq;
    }
}
