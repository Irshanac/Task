// // var myPow = function(x, n) {
// //     return Math.pow(x,n)
// // };

// //let s=["eat","tea","tan","ate","nat","bat"]
// //Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// let s=[""]
// var groupAnagrams = function(strs) {
//     let arr=[],r=[]
//     for(let i=0;i<strs.length;i++)
//     {
//         arr=[]     
//        //let a=strs.fiter(s=>s.split("").sort().join(""))
//        if(strs[i]=="")
//        {
//        // i++
//         continue;
//        }
//        //if(strs[i==""])
//        arr.push(strs[i])
//       // console.log(`${i} = ${arr}`);
       
//        for(let j=i+1;j<strs.length;j++)
//        {
//         let t=strs[i].split("").sort().join("");
//         let s=strs[j].split("").sort().join("");
//         if(s===t)
//         {
//             arr.push(strs[j])
//             strs[j]=''
//         }
//        }
//     //   console.log(strs);
       
//        r.push(arr)
//     }
//     if(r.length==0)
//         return r.push([""])
//     return r
// };
// console.log(groupAnagrams(s));

var groupAnagrams = function(strs) {
    let map = {};

    // Iterate through each string in the array
    for (let str of strs) {
        // Sort the string to get the key
        let sortedStr = str.split("").sort().join("");

        // If the sorted string is not in the map, add it as a key
        if (!map[sortedStr]) {
            map[sortedStr] = [];
        }

        // Push the original string to the array of anagrams
        map[sortedStr].push(str);
    }

    // Return all the anagram groups as arrays
    return Object.values(map);
};

// Test case
let s = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(s));

