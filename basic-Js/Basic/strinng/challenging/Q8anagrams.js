/**
 * Checks whether two strings are anagrams (same letters in different order).
 * 
 * @param {string} str1 - First string.
 * @param {string} str2 - Second string.
 * @returns {boolean} - True if anagrams, false otherwise.
 */
function areAnagrams(str1, str2) {
    if (str1.length !== str2.length) {
        console.log("❌ Not anagrams (length mismatch)");
        return false;
    }

    const freq = {};

    for (let char of str1) {
        freq[char] = (freq[char] || 0) + 1;
    }

    for (let char of str2) {
        if (!freq[char]) {
            console.log("❌ Not anagrams");
            return false;
        }
        freq[char]--;
    }

    console.log("✅ Anagrams");
    return true;
}

areAnagrams("listen", "silent");
