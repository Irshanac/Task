// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]


// var twoSum = function(nums, target) {
//     for(i=0;i<nums.length-1;i++)
//     {
//         for(j=i+1;j<nums.length;j++)
//         {
//             let total=nums[i]+nums[j]
//          if(total==target)
//             {
//               let a=[i,j]
//               return a;
//             }
//         }
           
//     }
//     return 0

// };
// let nums=[2,7,11,15]
// console.log(twoSum(nums,9))




let l1=[9,9,9,9,9,9,9],l2=[9,9,9,9]
var addTwoNumbers = function(l1, l2) {
    let s1=l1.reverse().join("")
    let s2=l2.reverse().join("")
    let n1=Number(s1)
    let n2=Number(s2)
    let result=n1+n2
    let s=String(result)
    console.log(s);
    console.log(typeof(s));
    let a= s.split("")
    console.log(a);
    let a1=a.reverse().join("")
    let a2=Number(a1)
    return a2
    
};
console.log(addTwoNumbers(l1,l2))