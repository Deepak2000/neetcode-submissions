class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        let res = [];
        const numIdxMap = new Map<number, number>();
        for(let i=0; i<nums.length; i++){
            let rem = target - nums[i];
            if(numIdxMap.has(rem)){
                const secondIdx = numIdxMap.get(rem);
                return [i, secondIdx].sort((a, b)=> a-b);
            }else{
                numIdxMap.set(nums[i], i);
            }
        }
    }
}
