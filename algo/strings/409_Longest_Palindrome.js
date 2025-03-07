// Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

// Letters are case sensitive, for example, "Aa" is not considered a palindrome.

 

// Example 1:

// Input: s = "abccccdd"
// Output: 7
// Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.
// Example 2:

// Input: s = "a"
// Output: 1
// Explanation: The longest palindrome that can be built is "a", whose length is 1.
 

function longestPalindrome (s) {
    if (s.length === 1) {
        return 1;
      }
      
      let freqMap = new Map();
      
      for (let char of s) {
        freqMap.set(char, (freqMap.get(char) || 0) + 1);
      }
      let result = 0;
      let hasOdd = false;
      
      for(const val of freqMap.values()) {
        if (val % 2 === 0) {
          result += val;
        } else {
          result += val-1;
          hasOdd = true;
        }
      }
      return hasOdd ? result + 1 : result;
}

export default longestPalindrome;