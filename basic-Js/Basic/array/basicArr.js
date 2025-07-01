// 🔹 Level 1: Basic Array Methods

// !1. Use array methods: push(), pop(), shift(), unshift(), length
/**  function basicArrayOperations() {
    let arr = [1, 2, 3, 4, 5];

    // TODO: Add 6 at the end
    arr.push(6); // [1, 2, 3, 4, 5, 6]

    // TODO: Remove the last element
    arr.pop(); // [1, 2, 3, 4, 5]

    // TODO: Remove the first element
    arr.shift(); // [2, 3, 4, 5]

    // TODO: Add element at the beginning
    arr.unshift(10); // [10, 2, 3, 4, 5]

    // TODO: Get the length
    let lengthOfArray = arr.length;

    console.log("Final array:", arr);
    console.log("Length of array:", lengthOfArray);
}

basicArrayOperations();

**/
/** // !2. Create a fruit array and add "grape" to the end

function addFruitWithPush() {
    let fruits = ["apple", "banana", "orange"];

    // TODO: Add "grape" using push()
    fruits.push("grape");

    console.log("Fruits:", fruits); // ["apple", "banana", "orange", "grape"]
}

addFruitWithPush();

function addFruitWithoutPush() {
    let fruits = ["apple", "banana", "orange"];

    // TODO: Add "grape" manually
    fruits[fruits.length] = "grape";

    console.log("Fruits (manual):", fruits);
}

addFruitWithoutPush();
*/

 /* // !3. Remove the last element from an array

function removeLastElement() {
    let numbers = [1, 2, 3, 4];

    // TODO: Use pop to remove the last item
    numbers.pop(); // [1, 2, 3]

    console.log("After pop:", numbers);
}

removeLastElement();
*/

 /* // !4. Add "start" at the beginning of ["a", "b"]

function addStartElement() {
    let letters = ["a", "b"];

    //? TODO: Add at the beginning
    letters.unshift("start");

    console.log("Updated array:", letters); // ["start", "a", "b"]
}

addStartElement();
*/

 /* // !5. Remove the first item from ["first", "second", "third"]

function removeFirstItem() {
    let items = ["first", "second", "third"];

    //? TODO: Remove first item
    items.shift(); // ["second", "third"]

    console.log("After shift:", items);
}

removeFirstItem();
*/


/* // !6. Find the length of ["x", "y", "z"]

function getArrayLength() {
    let letters = ["x", "y", "z"];

    //? TODO: Get length
    let length = letters.length;

    console.log("Length of array:", length); // Output: 3
}

getArrayLength();
*/
