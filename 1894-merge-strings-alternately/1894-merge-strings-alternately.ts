function mergeAlternately(word1: string, word2: string): string {
    let l=Math.max(word2.length,word1.length),r=[]
    for(let i=0;i<l;i++)
    {
        word1[i] && r.push( word1[i])
        word2[i] && r.push( word2[i])
    }
    return r.join("")
};