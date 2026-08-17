class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        const res = [];
        nums = nums.sort((a,b)=> a-b);
        console.log(nums)
        for(let i=0; i<nums.length; i++){

            if(i>0 && nums[i] === nums[i-1]) continue; // skip duplicate for first value

            let lPtr:number=i+1, rPtr:number=nums.length-1;
            while(lPtr<rPtr){
                const sum = nums[lPtr] + nums[rPtr] + nums[i];
                if(sum === 0){
                    res.push([nums[i], nums[lPtr], nums[rPtr]]);
                    // skip duplicate pairs by skipping numbers that are already part of a pair
                    while(lPtr < rPtr && nums[lPtr] === nums[lPtr+1]) lPtr++;
                    while(lPtr < rPtr && nums[rPtr] === nums[rPtr-1]) rPtr--;

                    lPtr++;
                    rPtr--;
                }else if(sum < 0){
                    lPtr++;
                }else{
                    rPtr--;
                } 
            }
        }
        console.log(res);
        return res;
    }
}
