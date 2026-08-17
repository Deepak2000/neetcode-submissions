class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {

        const setOfNums = new Set<number>();
        for(const num of nums){
            setOfNums.add(num);
        }

        let longest = 0;
        for(let i=0; i<nums.length; i++){
            if(setOfNums.has(nums[i]-1)){
                continue;
            }else{
                let nextInSeq = nums[i];
                let count = 0;
                while(setOfNums.has(nextInSeq)){
                    count++;
                    nextInSeq++;
                }
                longest = Math.max(longest, count);
            }
        }

        return longest;
    }
}
