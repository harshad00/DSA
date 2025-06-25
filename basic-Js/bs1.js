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


//! 1. Print the length of "JavaScript"
// let str = "Javascript"
// console.log(str.length); //? 10

// ! 2. Find the first and last index of 'a' in "banana"
// let str = "banana"
// console.log('first ', str.indexOf('a')); //? 1
// console.log('last ', str.lastIndexOf('a')); //? 5
 
 
// !3. Convert "I love Js" to uppercase.

// console.log("I love JS".toUpperCase());  //? "I LOVE JS"

// !4. Check if "frontend" includes "end".
//  console.log("frontend".includes("end")); //? true

//  !5. Trim the string " spaced out ".

// console.log(" spaced out ".trim());//? "spaced out".

// !6. Extract "code" from "decode" using slice();

// console.log("decode".slice(2));//? code

//! 7. Replace "bad" with "good" in "bad habit".

// console.log("bad habit".replace("bad","good")); //? "good habit"

// !8. Split "name,age,city" into an array
// console.log("name,age,city".split(",")); //? ["name", "age", "city" ]

// !9. Repeat the string "Hi " 3 items.
 
// console.log("Hi ".repeat(3));//? Hi Hi Hi

// !10. Check if "Hello" starts with "He".
// console.log("Hello".startsWith("He")); //? True
 

// Todo: 🧠 Questions 11–20 (Intermediate Level)

// !11. Capitalize the first letter of "javascript" → "Javascript"
// let str = "javascript";

// console.log(str.charAt(0).toUpperCase() + str.slice(1));

//? withoust string method:
// function UppfirstChar(str) {
//     let firstChar = str[0];
//     let makeUpp = String.fromCharCode(str.charCodeAt(0) - 32); //? 'J'
//     let uppChar = makeUpp

//     for (let i = 1; i < str.length; i++){
//         uppChar += str[i];
//     }
//     console.log(uppChar);
// }

// UppfirstChar(str)


// !12. Get the last character of a string using length.
// ? using length method
// let str = "javascript";
// let i1 = str.length

// let last1 = str[i1 - 1]
//   console.log(last1);
  

//?   without length method
// let i = 0;
// while (str[i] !== undefined) {
//     i++
// }
// let last = str[i - 1]
// console.log(last);

//? using for loop

// for (let i = 0; ; i++){
//     if (str[i] === undefined) {
//         console.log(str[i - 1]);
//         break;
//     }
// }




// !13. Reverse the string "hello" → "olleh"
//  ? with method
 
// let str = "Hello";

// console.log(str.split('').reverse().join(''));

//? without methood

// let reverse = ""

// for (let i = str.length - 1; i >= 0; i--){
//     reverse += str[i]
// }
// console.log(reverse);

 //? without using .length

// let i = 0
// let r = ''
// while (str[i] !== undefined) {
//     i++
// }

// console.log(i);

// for (let j = i - 1; j >= 0; j--){
//      r += str[j]
// }

// console.log(r);
// ? using for loop

//  let val = 0
// for (let i = 0; ; i++)
// {
//     if (str[i] === undefined) {
        // console.log(i);
//         val += i
//         break;
//  }
// }
// console.log(val);
// let r = ''
// for (let j = val ; j >= 1; j--){
    // console.log(str[j - 1]);
//     r+=str[j-1]
    
// }
// console.log(r);


// !14. Count how many times 'a' appears in "anagram".

// let a = 'anagram'
// let co = 0

// for (let i = 0; i < a.length; i++){
    
      
//     if ('a' == a[i])
//         co++
        
// }
// console.log(co);



// !15. Mask all but the last 4 digits of a string "1234567890" → "******7890"

// let num = '1234567890'
// let d = '*'.repeat(num.length - 4) + num.slice(-4)
// console.log(d);

// ? without methods

// let num1 = '1234567890'
// let  masked = ''

// for (let i = 0; num1[i] !== undefined; i++){

//     if (i < num1.length - 4) {
        
//         masked += '*'
//     }
//     else {
//         masked +=  num1[i]
//     }
// }
// console.log(masked);


  

// !16. Convert "welcome to js" to title case → "Welcome To Js"

// let str = "welcome to js";

// let words = str.split(" "); // Split into words
// let titleCased = [];

// for (let i = 0; i < words.length; i++) {
//     let word = words[i];
//     // Capitalize first letter + rest of the word
//     let capitalized = word[0].toUpperCase() + word.slice(1);
//     titleCased.push(capitalized);
// }

// console.log(titleCased.join(" "));
 


// !17. Extract only the domain from email "user@example.com" → "example.com"

// let email = "user@example.com";
// let domain = "";
// let foundAt = false;
// // console.log(email[8]);


// for (let i = 0; email[i] !== undefined; i++) {
//     if (foundAt) {
//         domain += email[i];
//         console.log("0");
        
//     }
//     if (email[i] === '@') {
//         foundAt = true;
//         console.log('1');
        
//     }
// }

// console.log(domain);

// !18. Use padStart() to convert "5" to "005" (length 3).
// let str = '5'
//   let do1 = str.padStart(3, '0')
 
// console.log(do1);


// !19. Compare "Hello" and "hello" — case-insensitive check.

// let a = 'Hello';
// let b = 'hello';

// if (a.toLowerCase === b.toLowerCase) {
//     console.log(`it's same`);
    
// }
// else {
//     console.log(`it's no same`);
    
// }
// !20. Replace all occurrences of "a" with "@" in "anagram" → "@n@gr@m"

// let str = "anagram"
// let newstr = ''

// for (let i = 0; i < str.length; i++){
//     if (str[i] === 'a') {
//         newstr+='@'
//     }
//     else {
//         newstr+=str[i]
//     }
    
// }
// console.log(newstr);


// Todo: 🔥 Questions 21–30 (Challenging/Bonus)

// !21. Write a function to check if a string is a palindrome (e.g., "madam").

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




// todo🔹 Level 2: Loop & Access

// Use for, for...of, or forEach() to access items.

// Print all elements of [10, 20, 30, 40].

// let arr = [10, 20, 30, 40]
// function printArr(arr) {
//     for (let i = 0; i < arr.length; i++){
//         console.log(arr[i]);
        
//     }
// }
// printArr(arr)
 

// !7. Print only even numbers from [1, 2, 3, 4, 5, 6].

// let arr = [1, 2, 3, 4, 5, 6]

// function evenNum(arr) {
//     let evenArr = []
//     for(let val of arr)
//     {
//         let even = val % 2
//         if (even === 0) {
//             evenArr.push(val)
            
//         }
//     }
//     console.log(evenArr);
    
// }

// evenNum(arr)

//!8. Print every character in ["a", "b", "c"] using for...of.
//  let arr = ["a", "b", "c"]
// function evertChar(arr) {
//     let newArr = []
//     for (let val of arr) {
//           newArr.push(val)
//     }
//     console.log(newArr);
    
//   }
//  evertChar(arr)
   
// 🔹 Level 3: Advanced Methods
// Use .map(), .filter(), .reduce(), .find(), .includes()

// Create a new array from [1, 2, 3] where each element is doubled.

// From [2, 5, 8, 11], filter out numbers > 5.

// Sum all numbers in [1, 2, 3, 4] using .reduce().

// Check if 7 is present in [4, 5, 6, 7, 8].

// Find the first even number in [1, 3, 5, 6, 7].

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

let arr1 = [1, 2]
let arr2 = [3, 4]
 
let newarr = [...arr1, ...arr2]

console.log(newarr);


// 🔹 Level 5: Challenge Mode
// Apply logic + methods.

// Find the second largest number in [10, 5, 20, 8]. 

// Remove duplicates from [1,2,2,3,4,4,5].

// Find common elements between [1,2,3] and [2,3,4].

// Flatten nested array [1, [2, 3], [4, [5]]] → [1,2,3,4,5].





 
 
 


