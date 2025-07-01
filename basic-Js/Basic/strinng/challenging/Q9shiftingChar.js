/**
 * Encrypts a string by shifting each character by 1 in the ASCII table.
 * 
 * @param {string} str - The original string.
 * @returns {string} - The encrypted string.
 */
function encryptByShifting(str) {
    let result = '';

    for (let char of str) {
        const nextChar = String.fromCharCode(char.charCodeAt(0) + 1);
        result += nextChar;
    }

    console.log(result);
    return result;
}

encryptByShifting("abc"); // Output: bcd
