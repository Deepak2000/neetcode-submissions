class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let encodedString:string = "";
        for(const str of strs){
            const encodedStr = `${str.length}#${str}`;
            encodedString += encodedStr;
        }
        return encodedString;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const decodedStrings:string[] = [];
        let lPtr:number = 0, rPtr:number = 0;

        while(lPtr < str.length){
            console.log(lPtr, rPtr)
            while(str[rPtr] !== "#"){
                rPtr++;
            }
            const len = parseInt(str.slice(lPtr, rPtr));
            lPtr = rPtr + 1;
            rPtr = rPtr + len + 1;
            const decodedWord = str.slice(lPtr, rPtr);
            decodedStrings.push(decodedWord);
            lPtr = rPtr;
        }
        return decodedStrings;
    }
}
