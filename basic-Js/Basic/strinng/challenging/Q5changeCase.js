/**
 * Converts a camelCase string to kebab-case.
 * 
 * @param {string} str - The camelCase string.
 * @returns {string} - The kebab-case converted string.
 */
function camelToKebab(str) {
    let result = '';

    for (let char of str) {
        if (char >= 'A' && char <= 'Z') {
            result += '-' + char.toLowerCase();
        } else {
            result += char;
        }
    }

    console.log(result);
    return result;
}

camelToKebab("camelCaseText");
