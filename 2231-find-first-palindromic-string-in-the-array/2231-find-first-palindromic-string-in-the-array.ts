function firstPalindrome(words: string[]): string {
    for (const item of words) {
        let r = item.split("").reverse().join("");
        if (r === item) return item;
    }
    return "";
}
