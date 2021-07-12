import iso from './isotope.js';
import { setTodoMenu } from './toggleMenus.js';
import { setEditTodoMenu } from './toggleForms.js';

const createTodoHeadingElement = (todoTitle) => {
  const todoHeadingDiv = document.createElement('div');
  todoHeadingDiv.classList.add('todo-heading');
  const todoH3 = document.createElement('h3');
  todoH3.classList.add('todo-title');
  todoH3.textContent = `${todoTitle}`;
  todoHeadingDiv.appendChild(todoH3);
  const todoMenuBtn = document.createElement('button');
  todoMenuBtn.classList.add('todo-menu-btn');
  todoHeadingDiv.appendChild(todoMenuBtn);
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.classList.add('todo-meatball');
  todoMenuBtn.appendChild(svg);
  const svgPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  svgPath.setAttribute(
    'd',
    'M6 12c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3zm9 0c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3zm9 0c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3z',
  );
  svg.appendChild(svgPath);

  return todoHeadingDiv;
};

const createTodoDescriptionElement = (todoDescription) => {
  const todoDescriptionDiv = document.createElement('div');
  todoDescriptionDiv.classList.add('todo-description');
  const todoDescriptionText = document.createElement('p');
  todoDescriptionText.classList.add('todo-paragraph');
  todoDescriptionText.textContent = `${todoDescription}`;
  todoDescriptionDiv.appendChild(todoDescriptionText);

  return todoDescriptionDiv;
};

const createTodoFooterElement = (categoryDot) => {
  const todoFooterDiv = document.createElement('div');
  todoFooterDiv.classList.add('todo-footer');
  const categoryDotSpan = document.createElement('span');
  categoryDotSpan.classList.add('dot', `dot${categoryDot}`);
  todoFooterDiv.appendChild(categoryDotSpan);
  const doneLabel = document.createElement('label');
  doneLabel.classList.add('control', 'control-checkbox');
  doneLabel.textContent = 'done';
  todoFooterDiv.appendChild(doneLabel);
  const doneCheckbox = document.createElement('input');
  doneCheckbox.type = 'checkbox';
  doneCheckbox.classList.add('done-checkbox');
  doneLabel.appendChild(doneCheckbox);
  const doneIndicator = document.createElement('span');
  doneIndicator.classList.add('control_indicator');
  doneLabel.appendChild(doneIndicator);

  return todoFooterDiv;
};

const createTodoOptionsElement = () => {
  const todoOptionsDiv = document.createElement('div');
  todoOptionsDiv.classList.add('todo-options');
  const todoEditBtn = document.createElement('button');
  todoEditBtn.classList.add('todo-options-btn', 'todo-edit-btn');
  todoEditBtn.textContent = 'Edit...';
  todoOptionsDiv.appendChild(todoEditBtn);
  const todoDeleteBtn = document.createElement('button');
  todoDeleteBtn.classList.add('todo-options-btn', 'todo-delete-btn');
  todoDeleteBtn.textContent = 'Delete';
  todoOptionsDiv.appendChild(todoDeleteBtn);

  return todoOptionsDiv;
};

const createTodoElement = (categoryTitle, categoryDot, todoTitle, todoDescription) => {
  const todo = document.createElement('div');
  todo.classList.add('todo', `${categoryTitle}`);
  const todoContentDiv = document.createElement('div');
  todoContentDiv.classList.add('todo-content');
  todo.appendChild(todoContentDiv);

  todoContentDiv.appendChild(createTodoHeadingElement(todoTitle));

  todoContentDiv.appendChild(createTodoDescriptionElement(todoDescription));

  todoContentDiv.appendChild(createTodoFooterElement(categoryDot));

  todo.appendChild(createTodoOptionsElement());

  return todo;
};

const displayTodo = () => {
  iso.insert(createTodoElement('work', '1', 'Test Todo', 'This is a test todo.'));
  iso.insert(createTodoElement('work', '1', 'Test Todo', 'This is a test todo.'));
  iso.insert(createTodoElement('work', '1', 'Test Todo', 'This is a test todo.'));
  iso.insert(createTodoElement('work', '1', 'Test Todo', 'This is a test todo.'));
  setTodoMenu();
  setEditTodoMenu();
};

const displayAllTodos = () => {

};

export { displayTodo, displayAllTodos };