class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const preFixProduct:Array<number> = new Array(nums.length);
        const postFixProduct:Array<number> = new Array(nums.length);

        for(let i=0; i<nums.length; i++){
            if(i==0){
                preFixProduct[i] = nums[i];
            }else{
                preFixProduct[i] = preFixProduct[i-1] * nums[i];
            }
        }
        for(let i=nums.length-1; i>=0; i--){
            if(i==nums.length-1){
                postFixProduct[i] = nums[i];
            }else{
                postFixProduct[i] = postFixProduct[i+1] * nums[i];
            }
        }

        const res:Array<number> = new Array(nums.length);

        for(let i=0; i<res.length; i++){
            if(i==0){
                res[i] = postFixProduct[i+1];
            }else if(i==res.length-1){
                res[i] = preFixProduct[i-1];
            }else{
                res[i] = preFixProduct[i-1] * postFixProduct[i+1];
            }
        }
        return res;
    }
}
