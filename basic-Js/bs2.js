// console.log("Start");

//  setTimeout(async () => {
//       await console.log("time out");
     
// }, 2000);

// console.log("End");


// let str = "harshad"

// let d = str.substring(2, 4)
// console.log(d);

let s1 = 'ab' 
let s2 = 'asgvba'

let d = Array(26).fill(0);
let d1 = Array(26).fill(0);
let a1 = 'a'.charCodeAt(0);

 console.log("befor loop  d = ",d);
 console.log("befor loop d1 = ",d1);
  
for (let i = 0; i < s1.length; i++){
    d[s1.charCodeAt(i) - a1]++
    d1[s2.charCodeAt(i) - a1]++
}
console.log(d);
console.log(d1);

 
// console.log(a1);

