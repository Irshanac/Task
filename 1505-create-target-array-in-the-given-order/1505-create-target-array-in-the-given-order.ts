function createTargetArray(nums: number[], index: number[]): number[] {
    const arr: number[] = [];
    for(let i = 0; i < nums.length; i++){
        arr.splice(index[i], 0, nums[i]);
    }
  return arr;
};