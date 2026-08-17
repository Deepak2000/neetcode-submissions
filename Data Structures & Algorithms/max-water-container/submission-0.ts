class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let lPtr:number=0, rPtr:number=heights.length-1;
        let maxArea = 0;
        while(lPtr < rPtr){
            const height = Math.min(heights[lPtr], heights[rPtr]);
            const area = height * (rPtr - lPtr);
            maxArea = Math.max(maxArea, area);
            
            if(heights[lPtr] < heights[rPtr]){
                lPtr++;
            }else{
                rPtr--;
            }
        }
        return maxArea;
    }
}
