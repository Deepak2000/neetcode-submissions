class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const numIdxMap = new Map<number, number>();

        for(let i=0; i<nums.length; i++){
            let rem = target - nums[i];
            if(numIdxMap.has(rem)){
                return [numIdxMap.get(rem), i];
            }else{
                numIdxMap.set(nums[i], i);
            }
        }
    }
}
