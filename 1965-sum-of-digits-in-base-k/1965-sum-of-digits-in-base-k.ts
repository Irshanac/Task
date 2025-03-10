function sumBase(n: number, k: number): number {
    let ret = 0
    let arr = n.toString(k).split('').forEach(x => ret += parseInt(x))
    return ret
};