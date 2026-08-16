class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const buckets = new Array<Array<number>>(nums.length);
        const freqMap:Record<string, number> = {};

        for(const num of nums){
            freqMap[num] = (freqMap[num] || 0) + 1;
        }

        const elementsByFreq:Array<Array<number>> = Object.entries(freqMap)
        .map(([num, freq]) => {
            return [freq, parseInt(num)]
        })
        elementsByFreq.sort((a,b) => b[0] - a[0])

        const elementsSortedByFreq = elementsByFreq.map(arr => arr[1]);

        // console.log(elementsByFreq)
        return elementsSortedByFreq.slice(0, k);
    }
}
