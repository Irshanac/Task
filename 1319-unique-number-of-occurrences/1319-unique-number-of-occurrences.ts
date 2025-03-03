function uniqueOccurrences(arr: number[]): boolean {
    const frequencyMap = new Map<number, number>();
    for (let num of arr) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }
    const frequencySet = new Set(frequencyMap.values());
    return frequencySet.size === frequencyMap.size;
}
