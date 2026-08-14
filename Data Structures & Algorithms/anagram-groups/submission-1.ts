class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const map = new Map<string, Array<string>>();
        for(const str of strs){
            const strHash:string = this.getHashOfString(str);
            if(map.has(strHash)){
                map.get(strHash).push(str);
            }else{
                map.set(strHash, [str]);
            }
        }
        const result = Array.from(map.values());
        return result;
    }

    getHashOfString(str: string):string{
        const hashBucketArray: number[] = new Array<number>(26).fill(0);
        const BASE_ASCII = "a".charCodeAt(0);
        for(const char of str){
            const normalizedIdx = char.charCodeAt(0) - BASE_ASCII;
            hashBucketArray[normalizedIdx]++;
        }
        return hashBucketArray.join("#");
    }
}
