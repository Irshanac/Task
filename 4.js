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



// Topics
// Companies
// Hint
// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

// Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
// Return k.

// var removeDuplicates = function(nums) {
//     let n=[...new Set(nums)]
//     console.log(n);
//     let l=n.length
//     let a=
//     n.sort(function(a,b) {return a-b})
//     for(let i=n.length;i<nums.length;i++)
//     {
//         n[i]="_"
//     }
//     console.log(a);
//     return l
// };
// let nums=[1,1,2]
// console.log(removeDuplicates(nums))

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;
    
    let k = 1;  

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[k] = nums[i];
            k++;
        }
    }

    return k;  
};

let nums = [1, 1, 2];
let k = removeDuplicates(nums);
console.log(k); 
console.log(nums.slice(0, k));
