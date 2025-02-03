function longestMonotonicSubarray(nums: number[]): number {
    let incrCount, decrCount, longestCount = 0;
    let last = nums[0];
    for (const num of nums) {
        if (num>last) {
            incrCount++;
            if (decrCount>longestCount) {
                longestCount = decrCount;
            }
            decrCount = 1;
        }
        else if (num<last) {
            decrCount++;
            if (incrCount>longestCount) {
                longestCount = incrCount;
            }
            incrCount = 1;
        }
        else {
            if (incrCount>longestCount) {
                longestCount = incrCount;
            }
            if (decrCount>longestCount) {
                longestCount = decrCount;
            }
            decrCount = 1;
            incrCount = 1;
        }
        last = num;
    }
    if (incrCount>longestCount) {
        longestCount = incrCount;
    }
    if (decrCount>longestCount) {
        longestCount = decrCount;
    }
    return longestCount;
};