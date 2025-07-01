/**
 * Counts the number of vowels (a, e, i, o, u) in a given string.
 * 
 * @param {string} str - The string to search for vowels.
 * @returns {number} - The count of vowels in the string.
 */
function countVowels(str) {
    const vowels = 'aeiou';
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        const char = str[i].toLowerCase();
        if (vowels.includes(char)) {
            count++;
        }
    }

    console.log("Total vowels:", count);
    return count;
}

countVowels("Harshad");
