/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    const join1=word1.join("")
    const join2=word2.join("")
    if(join1===join2)
        return true
    else
        return false
};