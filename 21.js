/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let d=[]
    let sp=s.split(" ")
    console.log(sp);
    for(let i=0;i<sp.length;i++)
    {
        if(sp[i]!="")
        {
            d.push(sp[i])
         }      
    }
    let rv=d.reverse()
    let j=rv.join(" ")
    let r=j.trim()
    return r
    
};
console.log(reverseWords("example   good a"));
