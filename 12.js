/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function(arr) {
    if(this.length<0)
        return -1
    else
        return this[this.length-1]
};

// /**
//  * const arr = [1, 2, 3];
//  * arr.last(); // 3
//  */
const arr=[1,{},3]
console.log(arr.last());


/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    let n1=BigInt(num1)
    let n2=BigInt(num2)
    let r=n1*n2
    return String(r)    
};
let num1="6"
let num2="7"
console.log(multiply(num1,num2))


/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let n = nums.length;

    
    for (let i = 0; i < n; i++) {
        while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] !== nums[i]) {
           
            [nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]];
        }
    }

    for (let i = 0; i < n; i++) {
        if (nums[i] !== i + 1) {
            return i + 1;
        }
    }

   
    return n + 1;
};


const nums = [3, 4, -1, 1];
console.log(firstMissingPositive(nums));

