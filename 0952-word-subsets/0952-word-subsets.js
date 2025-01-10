/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {string[]}
 */
var wordSubsets = function(words1, words2) {
    // Create a frequency map for all characters in words2
    let freq = Array(26).fill(0);
    for (let word of words2) {
        let temp = Array(26).fill(0);
        for (let char of word) {
            temp[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }
        for (let i = 0; i < 26; i++) {
            freq[i] = Math.max(freq[i], temp[i]);
        }
    }

    // Filter words1 based on the frequency map
    let result = [];
    for (let word of words1) {
        let temp = Array(26).fill(0);
        for (let char of word) {
            temp[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }

        let isSubset = true;
        for (let i = 0; i < 26; i++) {
            if (temp[i] < freq[i]) {
                isSubset = false;
                break;
            }
        }

        if (isSubset) {
            result.push(word);
        }
    }

    return result;
};
