const formatCategoryTitle = (text) => text.trim().toLowerCase();

const formatTodoTitle = (text) => text.trim()
  .toLowerCase()
  .split(' ')
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  .join(' ');

function formatTodoDescription(text) {
  const newString = text.trim()
    .toLowerCase()
    .replace(/(^\s*\w|[.!?]\s*\w)/g, (c) => c.toUpperCase());
  return newString;
}

export { formatCategoryTitle, formatTodoTitle, formatTodoDescription };