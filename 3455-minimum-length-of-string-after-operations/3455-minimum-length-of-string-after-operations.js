/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function(s) {
    let map = new Map();
    for(let i=0;i<s.length;i++){
        map.set(s[i],(map.get(s[i]) || 0)+1);
    }

    let count = 0;
    for(let [key,val] of map){
        if(val%2==0){
            count +=2;
        }else{
            count++;
        }
    }

    return count;
};