/**
 * Converts a string to camelCase format.
 * 
 * Rules:
 * - Remove leading/trailing whitespace
 * - Split on spaces, hyphens, or underscores
 * - First word is lowercase
 * - Subsequent words have their first letter capitalized
 * - Remove all separators
 * 
 * Examples:
 * - "hello world" => "helloWorld"
 * - "hello-world" => "helloWorld"
 * - "hello_world" => "helloWorld"
 * - "HELLO WORLD" => "helloWorld"
 * 
 * @param {string} str - The input string to convert
 * @returns {string} The camelCase version of the string
 */
function toCamelCase(str) {
    return str
        .trim()
        .split(/[\s\-_]+/)
        .map((word, index) => {
            if (index === 0) {
                return word.toLowerCase();
            }
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join('');
}

// Test examples
console.log(toCamelCase("hello world"));        // "helloWorld"
console.log(toCamelCase("hello-world"));        // "helloWorld"
console.log(toCamelCase("hello_world"));        // "helloWorld"
console.log(toCamelCase("HELLO WORLD"));        // "helloWorld"