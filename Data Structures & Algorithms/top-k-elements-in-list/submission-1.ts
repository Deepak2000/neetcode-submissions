class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const buckets = new Array<Array<number>>(nums.length);
        const freqMap = new Map<number, number>();

        for(const num of nums){
            if(freqMap.has(num)){
                const newFreq = freqMap.get(num) + 1;
                freqMap.set(num, newFreq);
            }else{
                freqMap.set(num, 1);
            }
        }

        for(const [num, freq] of freqMap){
            if(buckets[freq]){
                buckets[freq].push(num);
            }else{
                buckets[freq] = [num];
            }
        }

        let topFreqCount = 0;
        const res:Array<number> = [];
        for(let i=buckets.length-1; i>=0; i--){
            if(!!buckets[i]){
                for(const num of buckets[i]){
                    if(topFreqCount < k){
                        res.push(num);
                        topFreqCount++;
                    }
                }
            }
            if(topFreqCount == k) break;
        }
        console.log(buckets, freqMap, topFreqCount, res)
        return res;
    }
}
