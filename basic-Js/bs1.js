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

// !27. Find the longest word in the sentence "The quick brown fox jumped over the lazy dog".

// !28. Check if two strings are anagrams of each other ("listen", "silent").

// !29. Encrypt a string by shifting characters by 1 ("abc" → "bcd")

// !30. Count how many words are in the sentence "This is just a test" → 5







 
 
 


