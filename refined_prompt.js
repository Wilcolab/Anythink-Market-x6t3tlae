/**
 * String case conversion utility module
 * Provides functions to convert strings between different naming conventions
 * (camelCase, dot.case, etc.)
 * 
 * @module stringCaseConversion
 * @version 1.0.0
 * 
 * @example
 * // Convert to camelCase
 * const camel = toCamelCase('first name');
 * console.log(camel); // "firstName"
 * 
 * @example
 * // Convert to dot.case
 * const dotted = toDotCase('user_id');
 * console.log(dotted); // "user.id"
 */

/**
 * Converts a string to camelCase format
 * 
 * Transforms the input string by removing non-alphanumeric characters,
 * splitting on whitespace, and capitalizing each word except the first.
 * The first word remains lowercase.
 * 
 * @function toCamelCase
 * @param {string} str - The string to convert to camelCase
 * @returns {string} The camelCase converted string. Returns empty string if input
 *                   contains only non-alphanumeric characters.
 * @throws {TypeError} If input is not a string. Error message indicates the
 *                     actual type received.
 * 
 * @example
 * toCamelCase('first name');           // Returns: "firstName"
 * @example
 * toCamelCase('user_id');              // Returns: "userId"
 * @example
 * toCamelCase('hello-world-test');     // Returns: "helloWorldTest"
 * @example
 * toCamelCase('some_variable_name');   // Returns: "someVariableName"
 * @example
 * toCamelCase('');                     // Returns: ""
 * @example
 * toCamelCase('___');                  // Returns: ""
 * @example
 * toCamelCase('a');                    // Returns: "a"
 * 
 * @throws {TypeError} When called with non-string argument
 * @example
 * try {
 *     toCamelCase(123);
 * } catch (error) {
 *     console.error(error.message);    // "Expected string, received number"
 * }
 */

/**
 * Converts a string to dot.case format
 * 
 * Transforms the input string by removing non-alphanumeric characters,
 * splitting on whitespace, converting all characters to lowercase,
 * and joining words with dots.
 * 
 * @function toDotCase
 * @param {string} str - The string to convert to dot.case
 * @returns {string} The dot.case converted string. Returns empty string if input
 *                   contains only non-alphanumeric characters.
 * @throws {TypeError} If input is not a string. Error message indicates the
 *                     actual type received.
 * 
 * @example
 * toDotCase('first name');           // Returns: "first.name"
 * @example
 * toDotCase('user_id');              // Returns: "user.id"
 * @example
 * toDotCase('hello-world-test');     // Returns: "hello.world.test"
 * @example
 * toDotCase('some_variable_name');   // Returns: "some.variable.name"
 * @example
 * toDotCase('');                     // Returns: ""
 * @example
 * toDotCase('___');                  // Returns: ""
 * @example
 * toDotCase('a');                    // Returns: "a"
 * 
 * @throws {TypeError} When called with non-string argument
 * @example
 * try {
 *     toDotCase(123);
 * } catch (error) {
 *     console.error(error.message);   // "Expected string, received number"
 * }
 */

    // Handle empty strings and strings with only non-alphanumeric characters
    const cleaned = str.replace(/[^a-zA-Z0-9]/g, ' ').trim();
    if (!cleaned) {
        return '';
    }

    // Split by spaces and convert to dot.case
    return cleaned
        .split(/\s+/)
        .map(word => word.toLowerCase())
        .join('.');
}

// Examples
console.log(toDotCase('first name'));           // "first.name"
console.log(toDotCase('user_id'));             // "user.id"
console.log(toDotCase('hello-world-test'));    // "hello.world.test"
console.log(toDotCase('some_variable_name'));  // "some.variable.name"
console.log(toDotCase(''));                    // ""
console.log(toDotCase('___'));                 // ""
console.log(toDotCase('a'));                   // "a"

// Error handling
try {
    toDotCase(123);
} catch (error) {
    console.error(error.message);              // "Expected string, received number"
} 

