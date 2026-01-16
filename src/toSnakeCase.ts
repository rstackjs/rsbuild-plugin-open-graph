// Replace hyphens and spaces with underscores, and handle camelCase
function toSnakeCase (text: string) {
  return text
  // Inserts an underscore before uppercase letters (except the first one)
    .replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1_$2')

    // Converts the entire string to lowercase
    .toLowerCase()

    // Replaces any remaining hyphens or spaces with underscores
    .replace(/[-\s]+/g, '_');
};

export default toSnakeCase