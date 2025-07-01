// Todo: 🧠 Questions 11–20 (Intermediate Level)

//*11. Capitalize the first letter of "javascript" → "Javascript"
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


//* 12. Get the last character of a string using length.
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




//* 13. Reverse the string "hello" → "olleh"
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


//*A 14. Count how many times 'a' appears in "anagram".

// let a = 'anagram'
// let co = 0

// for (let i = 0; i < a.length; i++){
       
//     if ('a' == a[i])
//         co++
        
// }
// console.log(co);



//* 15. Mask all but the last 4 digits of a string "1234567890" → "******7890"

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

//* 16. Convert "welcome to js" to title case → "Welcome To Js"

// let str = "welcome to js";

// let words = str.split(" "); // Split into words
// let titleCased = [];

// for (let i = 0; i < words.length; i++) {
//     let word = words[i];
   //Todo: Capitalize first letter + rest of the word
//     let capitalized = word[0].toUpperCase() + word.slice(1);
//     titleCased.push(capitalized);
// }

// console.log(titleCased.join(" "));
 


//* 17. Extract only the domain from email "user@example.com" → "example.com"

// let email = "user@example.com";
// let domain = "";
// let foundAt = false;
 // console.log(email[8]);


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

//* 18. Use padStart() to convert "5" to "005" (length 3).
// let str = '5'
//   let do1 = str.padStart(3, '0')
 
// console.log(do1);


//* 19. Compare "Hello" and "hello" — case-insensitive check.

// let a = 'Hello';
// let b = 'hello';

// if (a.toLowerCase === b.toLowerCase) {
//     console.log(`it's same`);
    
// }
// else {
//     console.log(`it's no same`);
    
// }
//* 20. Replace all occurrences of "a" with "@" in "anagram" → "@n@gr@m"

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

