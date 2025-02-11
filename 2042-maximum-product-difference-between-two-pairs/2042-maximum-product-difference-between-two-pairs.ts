function maxProductDifference(nums: number[]): number {
    nums.sort((a,b) => a-b);
    let nl:number = nums.length;
    return ((nums[nl-1] * nums [nl-2]) - (nums[0] * nums[1]));
};