// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// Example 1:

// Input: s = "anagram", t = "nagaram"

// Output: true

// Example 2:

// Input: s = "rat", t = "car"

// Output: false

 

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.
 

// Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

// using two hasmaps
// function validAnagram(s, t) {
//     if (s.length !== t.length || s.length === 0) return false;
//     let smap = new Map();
//     let tmap = new Map();
//     for (let char of s) {
//         smap.set(char, (smap.get(char) || 0) +1);
//     }

//     for (let char of t) {
//         tmap.set(char, (tmap.get(char) || 0) +1);
//     }

//     for (const [key, val] of smap) {
//         if (tmap.get(key) !== val) {
//             return false;
//         }
//     }
//     return true;
// }

// sort and compare
function validAnagram(s,t) {
    if (s.length !== t.length || s.length === 0) return false;
    const sSorted = [...s].sort();
    const tSorted = [...t].sort();

    for (let i = 0; i < sSorted.length; i++) {
        if (sSorted[i] !== tSorted[i]) {
            return false;
        }
    }

    return true;
}

export default validAnagram;