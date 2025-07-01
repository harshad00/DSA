/**
 * Counts the number of words in a given sentence.
 * 
 * @param {string} str - The sentence to analyze.
 * @returns {number} - The number of words.
 */
function wordCount(str) {
    const words = str.trim().split(/\s+/);
    const count = words.length;

    console.log(`Word count: ${count}`);
    return count;
}

wordCount("This is just a test"); // Output: 5
