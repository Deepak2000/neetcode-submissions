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
        let lPtr:number, rPtr:number = 0;

        // let temp = "Hello";
        // console.log(temp.slice(1,3))
        for(let i=0; i<str.length; i++){
            if(str.charAt(rPtr) !== "#"){
                rPtr++;
                continue;
            }
            const len = parseInt(str.slice(lPtr, rPtr));
            lPtr = rPtr+1;
            rPtr = rPtr + len + 1;
            const decodedWord = str.slice(lPtr, rPtr);
            decodedStrings.push(decodedWord);

            lPtr = rPtr;
            if(lPtr==str.length) break;
        }
        return decodedStrings;
    }
}
