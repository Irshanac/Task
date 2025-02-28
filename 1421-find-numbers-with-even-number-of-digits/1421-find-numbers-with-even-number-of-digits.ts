function findNumbers(nums: number[]): number {
    let c=0
    for(let i=0;i<nums.length;i++)
    {
        if(nums[i].toString().length%2==0)
            c++
    }
    return c
    
};