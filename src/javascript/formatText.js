const formatCategoryTitle = (text) => text.trim().toLowerCase();

const formatTodoTitle = (text) => text.trim()
  .toLowerCase()
  .split(' ')
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  .join(' ');

const formatTodoDescription = (text) => text.trim()
  .toLowerCase()
  .replace(/(^\s*\w|[.!?]\s*\w)/g, (c) => c.toUpperCase());

export { formatCategoryTitle, formatTodoTitle, formatTodoDescription };