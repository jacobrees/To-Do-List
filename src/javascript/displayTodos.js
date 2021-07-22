import iso from './isotope.js';
import { todosArray, categoriesArray } from './database.js';
import { setTodoMenu, setDeleteTodoMenu } from './toggleMenus.js';
import { setEditTodoMenu } from './toggleForms.js';
import { setDoneCheckboxes } from './todosController.js'; // eslint-disable-line

const createTodoHeadingElement = (todoTitle, todoDone) => {
  const todoHeadingDiv = document.createElement('div');
  todoHeadingDiv.classList.add('todo-heading');
  if (todoDone) {
    todoHeadingDiv.classList.add('done');
  }
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

const createTodoDescriptionElement = (todoDescription, todoDone) => {
  const todoDescriptionDiv = document.createElement('div');
  todoDescriptionDiv.classList.add('todo-description');
  if (todoDone) {
    todoDescriptionDiv.classList.add('done');
  }
  const todoDescriptionText = document.createElement('p');
  todoDescriptionText.classList.add('todo-paragraph');
  todoDescriptionText.textContent = `${todoDescription}`;
  todoDescriptionDiv.appendChild(todoDescriptionText);

  return todoDescriptionDiv;
};

const createTodoFooterElement = (categoryDot, todoDone) => {
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
  if (todoDone) {
    doneCheckbox.checked = true;
  }
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

const createTodoElement = (categoryTitle, categoryDot, todoTitle, todoDescription, todoDone) => {
  const todo = document.createElement('div');
  todo.classList.add('todo', `${categoryTitle}`);
  const todoContentDiv = document.createElement('div');
  todoContentDiv.classList.add('todo-content');
  todo.appendChild(todoContentDiv);
  todoContentDiv.appendChild(createTodoHeadingElement(todoTitle, todoDone));
  todoContentDiv.appendChild(createTodoDescriptionElement(todoDescription, todoDone));
  todoContentDiv.appendChild(createTodoFooterElement(categoryDot, todoDone));
  todo.appendChild(createTodoOptionsElement());

  return todo;
};

const displayTodo = (categoryTitle, categoryDot, todoTitle, todoDescription) => {
  iso.insert(createTodoElement(categoryTitle, categoryDot, todoTitle, todoDescription, false));
  setTodoMenu();
  setEditTodoMenu();
  setDeleteTodoMenu();
  setDoneCheckboxes();
};

const displayAllTodos = () => {
  todosArray.forEach((todo) => {
    const categoryIndex = categoriesArray
      .findIndex((category) => category.category === todo.todoCategory) + 1;
    iso.insert(createTodoElement(
      todo.todoCategory,
      categoryIndex,
      todo.todoTitle,
      todo.todoDescription,
      todo.todoDone,
    ));
  });
  setTodoMenu();
  setEditTodoMenu();
  setDeleteTodoMenu();
  setDoneCheckboxes();
};

export { displayTodo, displayAllTodos };