/**
 * Removes duplicate characters from a given string.
 * 
 * @param {string} str - The input string.
 * @returns {string} - A string with duplicates removed.
 */
function removeDuplicateCharacters(str) {
    let result = '';

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (!result.includes(char)) {
            result += char;
        }
    }

    console.log(result);
    return result;
}

removeDuplicateCharacters("programming");


// 
// function removedubchar(str) {
//     let nodupchar = '';

//     for (let i = 0; i < str.length; i++) {
//         let alreadyExists = false;

//         for (let j = 0; j < nodupchar.length; j++) {
//             if (str[i] === nodupchar[j]) {
//                 alreadyExists = true;
//                 break;
//             }
//         }

//         if (!alreadyExists) {
//             nodupchar += str[i];
//         }
//     }

//     console.log(nodupchar);
// }

// removedubchar("programming"); // Output: progamin


