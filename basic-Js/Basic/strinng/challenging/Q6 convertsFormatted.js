/**
 * Converts a snake_case string to a formatted title-case string with spaces.
 * Convert "hello_world" to "Hello World"
 * 
 * @param {string} str - The snake_case string.
 * @returns {string} - A title-formatted string.
 */
function snakeToTitle(str) {
    let result = '';
    let capitalizeNext = true;

    for (let char of str) {
        if (char === '_') {
            result += ' ';
            capitalizeNext = true;
        } else if (capitalizeNext) {
            result += char.toUpperCase();
            capitalizeNext = false;
        } else {
            result += char;
        }
    }

    console.log(result);
    return result;
}

snakeToTitle("hello_world_from_js");
