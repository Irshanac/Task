/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if(s.length<1)
        return ""
    let long=""
    for(i=0;i<s.length;i++)
    {
       let evenLen=check(s,i,i+1);
       let oddLen=check(s,i,i);
       if(long.length<evenLen.length)
            long=evenLen
        if(long.length<oddLen.length)
            long=oddLen
    }
    return long
};
function check(s,left,right)
{
    while(left>=0 && right<s.length && s[left]==s[right])
    {
        left--
        right++
    }
    //console.log(s.slice(left,right+1))
    return s.slice(left+1,right+1)
}
let s="ababa"
console.log("resut    "+longestPalindrome(s));
