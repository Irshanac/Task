/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let a=s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let rv=a.split("").reverse().join("")
    if(a===rv)
        return true
    else 
        return false    
};
console.log(isPalindrome("A man, a plan, a canal: Panama"));
