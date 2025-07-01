/**
 * Function to check if a given string is a palindrome.
 * A palindrome reads the same forward and backward, e.g., "madam", "racecar".
 * 
 * @param {string} inputStr - The string to be checked.
 * @returns {boolean} - Returns true if inputStr is a palindrome, false otherwise.
 */
function isPalindrome(inputStr) {
    // TODO: Create a variable to store the reversed version of the input string
    let reversedStr = '';

    // TODO: Loop through the original string in reverse order
    for (let i = inputStr.length - 1; i >= 0; i--) {
        reversedStr += inputStr[i]; // TODO: Add each character to the reversedStr
    }

    // Optional: Uncomment to debug the reversed string
    // console.log('Reversed String:', reversedStr);

    // TODO: Compare the original and reversed strings
    if (inputStr === reversedStr) {
        // TODO: If both are equal, it's a palindrome
        console.log('✅ It is a palindrome.');
        return true;
    } else {
        // TODO: If not equal, it's not a palindrome
        console.log('❌ It is not a palindrome.');
        return false;
    }
}

// Example usage
isPalindrome('madam');        // ✅ true
isPalindrome('hello');        // ❌ false
isPalindrome('racecar');      // ✅ true
isPalindrome('Madam');        // ❌ false (case-sensitive)
