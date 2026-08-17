class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        
        let sanitized = "";
        for(let c of s){
            if(this.isAlphaNumeric(c))
            sanitized += c.toLowerCase();
        }
        console.log(sanitized);
        let lPtr:number=0, rPtr:number=sanitized.length-1;
        while(lPtr<=rPtr){
            if(sanitized[lPtr] == sanitized[rPtr]){
                lPtr++;
                rPtr--;
            }else{
                return false;
            }
        }

        return true;
    }

    isAlphaNumeric(c:string): boolean{
        return(
            (c.charCodeAt(0) >= 'a'.charCodeAt(0) && c.charCodeAt(0) <= 'z'.charCodeAt(0)) ||
            (c.charCodeAt(0) >= 'A'.charCodeAt(0) && c.charCodeAt(0) <= 'Z'.charCodeAt(0)) ||
            (c.charCodeAt(0) >= '0'.charCodeAt(0) && c.charCodeAt(0) <= '9'.charCodeAt(0))
        )
    }
}
