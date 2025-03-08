function uncommonFromSentences(s1: string, s2: string): string[] {
    let r1 = s1.split(" ").concat(s2.split(" ")),r=[]
    for(let i=0;i<r1.length;i++)
    {
        if(r1.indexOf(r1[i])===r1.lastIndexOf(r1[i]))
        {
            r.push(r1[i])
        }
    }
    return r
};