/**
 * Finds the character that appears most frequently in a string.
 * 
 * @param {string} str - The input string.
 * @returns {string} - The most frequent character.
 */
function mostFrequentCharacter(str) {
    const frequency = {};
    let maxChar = '';
    let maxCount = 0;

    for (let char of str) {
        frequency[char] = (frequency[char] || 0) + 1;

        if (frequency[char] > maxCount) {
            maxCount = frequency[char];
            maxChar = char;
        }
    }

    console.log(`Most frequent character: "${maxChar}" → ${maxCount} times`);
    return maxChar;
}

mostFrequentCharacter("mississippi");
