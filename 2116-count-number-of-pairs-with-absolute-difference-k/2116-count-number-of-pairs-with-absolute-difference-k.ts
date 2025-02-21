function countKDifference(nums: number[], k: number): number {
    let c=0
    for(let i=0;i<nums.length;i++)
    {
        for(let j=0;j<nums.length;j++)
        {
            if(k==(nums[i]-nums[j]))
                c++
        }
    }
    return c
};