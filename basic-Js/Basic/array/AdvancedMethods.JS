/**
 * !Returns a new array where each element is doubled using map().
 * @param {number[]} arr - The original array.
 * @returns {number[]} - The doubled array.
 */
// function doubleArrayElements(arr) {
//     const doubled = arr.map(num => num * 2);
//     console.log("Doubled:", doubled);
//     return doubled;
// }

// doubleArrayElements([1, 2, 3]); // Output: [2, 4, 6]


/**
 *! Filters out numbers greater than 5.
 * @param {number[]} arr - Array of numbers.
 * @returns {number[]} - Filtered array.
 */

// function filterGreaterThanFive(arr) {
//     const filtered = arr.filter(num => num > 5);
//     console.log("Filtered > 5:", filtered);
//     return filtered;
// }

// filterGreaterThanFive([2, 5, 8, 11]); // Output: [8, 11]


/**
 * !Sums all numbers in the array using reduce().
 * @param {number[]} arr - Array of numbers.
 * @returns {number} - Total sum.
 */
// function sumArray(arr) {
//     const sum = arr.reduce((acc, curr) => acc + curr, 0);
//     console.log("Sum:", sum);
//     return sum;
// }

// sumArray([1, 2, 3, 4]); // Output: 10


/**
 *! Checks if a number exists in an array using includes().
 * @param {number[]} arr - The array to search.
 * @param {number} target - The number to find.
 * @returns {boolean} - True if found, false otherwise.
 */
// function checkPresence(arr, target) {
//     const isPresent = arr.includes(target);
//     console.log(`${target} present:`, isPresent);
//     return isPresent;
// }

// checkPresence([4, 5, 6, 7, 8], 7); // Output: true

/**
 * !Finds the first even number in the array using find().
 * @param {number[]} arr - Array of numbers.
 * @returns {number|undefined} - First even number or undefined if not found.
 */
// function findFirstEven(arr) {
//     const even = arr.find(num => num % 2 === 0);
//     console.log("First even number:", even);
//     return even;
// }

// findFirstEven([1, 3, 5, 6, 7]); // Output: 6

