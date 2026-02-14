function toKebabCase(input) {
    // Handle invalid inputs
    if (typeof input !== 'string' || input.trim() === '') {
        throw new Error('Input must be a non-empty string');
    }

    return input
        // Replace spaces, hyphens, underscores, and camelCase boundaries with spaces
        .replace(/[\s\-_]+/g, ' ')
        .replace(/([a-z])([A-Z])/g, '$1 $2')
        .replace(/([A-Z])([A-Z][a-z])/g, '$1 $2')
        // Convert to lowercase and trim
        .toLowerCase()
        .trim()
        // Replace spaces with hyphens and remove any remaining special characters
        .replace(/\s+/g, '-')
        .replace(/[^\w\-]/g, '');
}

// Example usage:
console.log(toKebabCase('hello world'));           // 'hello-world'
console.log(toKebabCase('HelloWorld'));            // 'hello-world'
console.log(toKebabCase('hello-world'));           // 'hello-world'
console.log(toKebabCase('hello_world'));           // 'hello-world'
console.log(toKebabCase('hello'));                 // 'hello'
console.log(toKebabCase('HELLO WORLD'));           // 'hello-world'
console.log(toKebabCase('hello  world'));          // 'hello-world'

// Error handling:
try {
    toKebabCase('');
} catch (e) {
    console.error(e.message);
}

try {
    toKebabCase(null);
} catch (e) {
    console.error(e.message);
}