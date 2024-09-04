// Given an integer x, return true if x is a 
// palindrome
// , and false otherwise.

var isPalindrome = function(x) {
    let rev=0   
    if(x==0)
        return true
    else if(x<0)
         return false

    let temp=x
    while(x>0)
    {
        let rm=x%10
        rev=rev*10+rm
        x=Math.floor(x/10)
    }
    if(rev==temp)
       return true 
    else 
        return false
};
console.log(isPalindrome(121))