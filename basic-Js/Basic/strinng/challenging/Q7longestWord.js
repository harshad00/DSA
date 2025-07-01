/**
 * Finds the longest word in a given sentence using split().
 * 
 * @param {string} str - The input sentence.
 * @returns {string} - The longest word found.
 */
function longestWord(str) {
    const words = str.split(' ');
    let longest = '';

    for (let word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }

    console.log(`Longest word: "${longest}" → ${longest.length} letters`);
    return longest;
}

longestWord("The quick brown fox jumped over the lazy dog");

//! Without .split()

/**
 * Finds the longest word in a sentence without using split().
 * 
 * @param {string} sentence - The input sentence.
 * @returns {string} - The longest word found.
 */
function findLongestWordWithoutSplit(sentence) {
    let currentWord = '';
    let longestWord = '';
    
    for (let character of sentence) {
        if (character === ' ') {
            if (currentWord.length > longestWord.length) {
                longestWord = currentWord;
            }
            currentWord = '';
        } else {
            currentWord += character;
        }
    }

    // Final check for the last word after the loop
    if (currentWord.length > longestWord.length) {
        longestWord = currentWord;
    }

    console.log(`Longest word: "${longestWord}" → ${longestWord.length} letters`);
    return longestWord;
}

// Example usage
findLongestWordWithoutSplit("The quick brown fox jumped over the lazy dog");

