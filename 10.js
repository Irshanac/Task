/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let s1=s.split(" ")
    console.log(s1);
    let j=s1.length-1
    while(s1.at(j)=="")
    {
        j--;
        continue;
    }
    if(s1[j]!=" ")
        return s1[j].length 
};
s="hello  bfghj yui poiuytrfgh jhgfghworld"
console.log(lengthOfLastWord(s));