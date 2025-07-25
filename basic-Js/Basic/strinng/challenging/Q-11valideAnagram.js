// var isAnagram = function(s, t) {
//   if (s.length !== t.length) return false;
 
//     let sortedS = s.split('').sort().join('');
//     let sortedT = t.split('').sort().join('');

//     return sortedS === sortedT;
// };

// !
// var isAnagram = function(s, t) {
//  if (s.length !== t.length) return false;

//   let val = {};

//   // Count characters in string s
//   for (let i = 0; i < s.length; i++) {
//     let char = s[i];
//     val[char] = (val[char] || 0) + 1;
//   }

//   // Decrease count based on characters in string t
//   for (let j = 0; j < t.length; j++) {
//     let char = t[j];
//     if (!val[char]) {
//       return false; // character not found or count is zero
//     } else {
//       val[char]--;
//     }
//   }

//   return true;
//};


// !

var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;

    const countS = Array(26).fill(0);
    const countT = Array(26).fill(0);

    for (let i = 0; i < s.length; i++) {
        countS[s.charCodeAt(i) - 97]++;
        countT[t.charCodeAt(i) - 97]++;
    }

    for (let i = 0; i < 26; i++) {
        if (countS[i] !== countT[i]) return false;
    }

    return true;
}
