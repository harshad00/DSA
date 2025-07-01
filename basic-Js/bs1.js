// console.log('Hello world');

// for (let i = 0; i < 5; i++) {
//     let row = ''
//     for (let j = 0; j < 5; j++) {
//         row += '*'
//     }
//     console.log(row);
// }


// for (let i = 0; i < 5; i++){
//     let row = '';
//     for (let j = 5; j > i ; j--){
//         row += '*';
//     }
//     console.log(row);
    
// }




// Todo: 🔥 Questions 21–30 (Challenging/Bonus)

// !1. Write a function to check if a string is a palindrome (e.g., "madam").

// function palindrome(str) {
//     let rstr = str.split('').reverse().join('');
//     console.log(rstr);
//     if (str === rstr) {
//         console.log('true');
//         return true
//     }
    
// }
// palindrome('madam')

// function palindrome(str) {
//     let rstr= ''
//     for (let i = str.length - 1; i >= 0; i--){
//       rstr += str[i]
//     }
//     console.log(rstr);
    
//     if (str === rstr) {
//        console.log('true');
//         return true;
       
//     }
//     else {
//         console.log('false');
//         return false;
        
//     }
// }

// palindrome('madsassghr2')

// !22. Count the number of vowels in a string.
// function numofvowels(str) {
//     let vowels = 'aeiou'
//     let countofvowels = 0;
//     for (let i = 0; i < str.length; i++){
    
//         for (let j = 0; j < vowels.length; j++){
            
//             if (str[i] === vowels[j]) {
//               countofvowels += 1
//           }
//         }
//     }
//     console.log(countofvowels);
    
// }

// numofvowels("harshad")


// !23. Remove duplicate characters from "programming" → "progamin"

// function removedubchar(str) {
//     let nodupchar = '';

//     for (let i = 0; i < str.length; i++) {
//         let alreadyExists = false;

//         for (let j = 0; j < nodupchar.length; j++) {
//             if (str[i] === nodupchar[j]) {
//                 alreadyExists = true;
//                 break;
//             }
//         }

//         if (!alreadyExists) {
//             nodupchar += str[i];
//         }
//     }

//     console.log(nodupchar);
// }

// removedubchar("programming"); // Output: progamin


// !24. Find the most frequent character in "mississippi" → "s"

// function mostfrequentchar(str) {

//     let freq = {};
//     let maxChar = '';
//     let maxCount = 0;

//     for (let i = 0; i < str.length; i++){
//         let char = str[i];
//         console.log(freq[char]);
        
//         if (freq[char]) {
//             freq[char]++;
//         }
//         else {
//             freq[char] = 1;
//         }
//         console.log(freq);
        

//         if (freq[char] > maxCount) {
//             maxCount = freq[char];
//             maxChar = char;
//         }
      
//     }
//     console.log("most frequent character: ", maxChar ," = ", maxCount, "times");
    
// }
// mostfrequentchar("mississippi")


// !25. Convert "camelCase" to "camel-case" (insert - before each capital).


// function cov(str) {
//     let newchar = ''
//     for (let i = 0; i < str.length; i++){
//         let char = str[i]
   
//         if (char >= 'A' && char <= 'Z') {
//             newchar += '-' + char.toLowerCase();
//         }
//         else {
//             newchar +=char
//         }

//     }
//     let ans = newchar
//     console.log(ans);
    

//  }
 
//  cov("camelCase")
  

// !26. Convert "hello_world" to "Hello World" (nice formatting task).

// function cov(str) {
//     let word = '_'
//     let neww = ''

//     for (let i = 0; i < str.length; i++){
        
//         if (str[i] === word) {
            
//             neww += ' ' + str[i + 1].toUpperCase()
//             i++
//         }
//         else if (i === 0) {
//             neww += str[i].toUpperCase()

//         }
//         else {
//                neww += str[i]
               
//         }

//     }
//     console.log(neww);
    
// }

//  cov("hello_world_from_js")

// !27. Find the longest word in the sentence "The quick brown fox jumped over the lazy dog".

// function long(str) {
//     let obb = {}
//     let lognword = ''
//     let longnum = 0
//     let arr = str.split(' ')

//     for (let i = 0; i < arr.length; i++) {
           
//         let word = arr[i];
//         if (word.length > longnum) {
//             lognword = word
//             longnum = word.length

//         }
//     }

//     console.log(" long word in this string is", lognword + " " + longnum);
    

// }

// long("The quick brown fox jumped over the lazy dog")
 
//? without split()
// function findLongestWord(str) {
//     let currWord = '';
//     let longestWord = '';
//     let maxLength = 0;

//     for (let i = 0; i < str.length; i++) {
//         let char = str[i];

//         if (char !== ' ') {
//             currWord += char;
//         } else {
//             if (currWord.length > maxLength) {
//                 maxLength = currWord.length;
//                 longestWord = currWord;
//             }
//             currWord = ''; // ?reset for next word
//         }
//     }

       //  ? Final check for last word (after loop ends)
//     if (currWord.length > maxLength) {
//         longestWord = currWord;
//         maxLength = currWord.length;
//     }

//     console.log("Longest word:", longestWord, "→", maxLength, "letters");
// }

// findLongestWord("The quick brown fox jumped over the lazy dog");



// !28. Check if two strings are anagrams of each other ("listen", "silent").
  
// function ana(str1, str2) {
//     if (str1.length !== str2.length) {
//         console.log("Not anagrams (different lengths)");
//         return false;
//     }

//     let freq = {};

//     // Count characters in str1
//     for (let i = 0; i < str1.length; i++) {
//         let char = str1[i];
//         if (freq[char]) {
//             freq[char]++;
//         } else {
//             freq[char] = 1;
//         }
//     }

//     // Subtract using characters in str2
//     for (let i = 0; i < str2.length; i++) {
//         let char = str2[i];
//         if (!freq[char]) {
//             console.log("Not anagrams");
//             return false;
//         } else {
//             freq[char]--;
//         }
//     }

//     // Final check: all values must be 0
//     for (let key in freq) {
//         if (freq[key] !== 0) {
//             console.log("Not anagrams");
//             return false;
//         }
//     }

//     console.log("Anagrams");
//     return true;
// }

// ana("listen", "sil7nt"); // ✅ Anagrams


// !29. Encrypt a string by shifting characters by 1 ("abc" → "bcd")

 


// !30. Count how many words are in the sentence "This is just a test" → 5



//? JS Array Practice (Level-Wise)

//todo: 🔹 Level 1: Basic Methods

// !1. Use array methods like push(), pop(), shift(), unshift(), length.
// let arr = [1, 2, 3, 4, 5];
// let arr1 = arr.push(6)
// let arr2 = arr.pop()
// let arr3 = arr.shift()
// let arr4 = arr.unshift(3)
// let arr5 = arr.length

// console.log(typeof(  arr5, arr ));



// !2. Create an array of fruits and add "grape" at the end.

// ? use push().

let fruits = ["appli", "banana", "orange"]
 
// let addNewFruits = fruits.push("grape")
// console.log(addNewFruits);

//? without push()
// function isAdd(val) {
    
//     fruits[fruits.length] = val
    
//     console.log(fruits);
    
// }

// isAdd("grape")

 

// !3. Remove the last element from [1, 2, 3, 4].

// let arr = [1, 2, 3, 4]

// arr.pop()
// console.log(arr);


// !4. Add "start" to the beginning of ["a", "b"].
         
// let arr = ["a", "b"]
   
// arr.unshift("start")
// console.log(arr);


//!5. Remove the first item from ["first", "second", "third"].

// let item = ["first", "second", "third"]

// item.shift()
//  console.log(item);
 

//!6Find the length of ["x", "y", "z"].

// let arr = ["x", "y", "z"]
// let lengthOfArr = arr.length
// console.log(lengthOfArr);


function arrLength() {
    
}




// 🔹 Level 4: Real-Use Patterns
// Logic-based with loops and conditions.

// !Reverse [1, 2, 3, 4] without .reverse().
//  let arr = [1, 2, 3, 4,5,6,7,8,9]
// function reverse(arr) {
//      let reverseArr = []
//     for (let i = arr.length -1 ; i >= 0; i--){
//           reverseArr.push(arr[i])
//     }
//     console.log(reverseArr);
    
// }
//  reverse(arr)
//! Count how many times 2 appears in [2, 3, 2, 5, 2, 6].

// let arr = [2, 3, 2, 5, 2, 6]

// function times(arr, s) {
//     let appval = 0
//     for (let i = 0; i < arr.length; i++)
//     {
//         if (s == arr[i]) {
//           appval+=1
//       }
//     }
//     console.log(appval);
    
    
    
// }
// times(arr, 2)
  
//! Remove all null or undefined values from an array.

// Merge two arrays [1,2] and [3,4] into [1,2,3,4].

// let arr1 = [1, 2]
// let arr2 = [3, 4]
 
// let newarr = [...arr1, ...arr2]

// console.log(newarr);


// 🔹 Level 5: Challenge Mode
// Apply logic + methods.

// Find the second largest number in [10, 5, 20, 8].
// let arr = [10, 5, 20, 8]
// function secLar(arr) {
//     let first = -Infinity;
//     let second = -Infinity;
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] > first) {
            
//             second = first;
//             first = arr[i]
//         }
//         else if (arr[i] > second && arr[i] !== first) {
//             screen = arr[i]
//         }

//     }
//     console.log(second);
     
//     }
    

// secLar(arr)
// // *  Second largest number with sort array

// function sl(arr) {
//      let sortarr =  arr.sort((b,a)=> (b-a)); // Sort in descending order
//     console.log(sortarr);
    
//     let larnum = sortarr.length - 2;
//     console.log(sortarr[larnum]);
    
// }
// sl(arr)

 
// !Remove duplicates from [1,2,2,3,4,4,5].
//  let arr = [1, 2, 2, 3, 4, 4, 5];

// function removeDuplicates(arr) {
//   let newarr = [];

//   for (let i = 0; i < arr.length; i++) {
//     let isDuplicate = false;

//     for (let j = 0; j < newarr.length; j++) {
//       if (arr[i] === newarr[j]) {
//         isDuplicate = true;
//         break;
//       }
//     }

//     if (!isDuplicate) {
//       newarr.push(arr[i]);
//     }
//   }

//   console.log(newarr);
// }

// removeDuplicates(arr)

//! Find common elements between [1,2,3] and [2,3,4].
// let arr1 = [1, 2, 3]
// let arr2 = [ 2,3,4]
// function common(arr1, arr2) {
//     let commonarr = []
//     for (let i = 0; i < arr1.length; i++){
//         let valarr1 = arr1[i]
//         for (let j = 0; j < arr2.length; j++){
//             if (valarr1 === arr2[j]) {
//                 commonarr.push(valarr1)
//             }
//         }

//     }
//     console.log(commonarr);
    
    
// }

// common(arr1, arr2)

// let a = [1,2,2,3,4,5,6,54,33,4,4,5,4,5,4]

// let ar = new Set(a)
// console.log(ar);

//! Flatten nested array [1, [2, 3], [4, [5]]] → [1,2,3,4,5].

// let arr =    [1, [2, 3], [4, [5]]]

// let newar = al.flat(2)
//  console.log(newar);
 
 
// function nested(arr) {
//     let val1 = []
//     let stack = [...arr]
    
//     while (stack.length) {
        
//         let val = stack.pop();

//         if (Array.isArray(val)) {
//             stack.push(...val)
            
//         } else {
//            val1.push(val)
//         }
//     }
//     let f1 = val1.reverse()
//     console.log(f1);
    
//  }


  nested(arr)


 
 
 


