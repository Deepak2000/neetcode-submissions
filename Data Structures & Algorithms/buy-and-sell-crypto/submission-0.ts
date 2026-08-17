class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let lowest = 999;
        let maxProfit = 0;

        for(const price of prices){
            if(price < lowest) lowest = price;
            if(price - lowest > maxProfit){
                maxProfit = price - lowest;
            }
        }
        // console.log(lowest, maxProfit)

        return maxProfit;
    }
}
