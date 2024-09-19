/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    //let tempt=x;
    const MAX_INT = 2 ** 31 - 1; // 2147483647
    const MIN_INT = -(2 ** 31);  // -2147483648
     let r=0,rv=0,tem=x
     if(x<0)
        x=x*-1
    while(x>0)
    {
        r=x%10
        rv=rv*10+r;
        x=x/10
        x=Math.floor(x) 
    }
    if(tem<0)
         rv=rv*-1
     if (rv < MIN_INT || rv > MAX_INT) {
        return 0;
    }
    
    return rv
    
};
console.log(reverse(123));


var findMedianSortedArrays = function(nums1, nums2) {
    let ar = [...nums1, ...nums2].sort((a, b) => a - b);
    let n=ar.length,r=[],m
    if(n%2===0)
    {
        m=n/2
        let a1=push(ar[m-1])
        let a2=push(ar[m])
        r.push((a1+a2)/2)
    }
    else{
        r.push(ar[Math.floor(n/2)])
    }
    return r
};
console.log(findMedianSortedArrays([1,3],[5,6,7]));

