import { displayTodo } from './displayTodos.js'; // eslint-disable-line
import {
  addTodoToArray, categoriesArray, deleteTodoFromArray,
  editTodoInArray, toggleTodoDoneInArray, deleteAllDoneTodosInArray,
} from './database.js';
import { toggleAddTodoMenu, toggleEditTodoMenu } from './toggleForms.js';
import { toggleDeleteTodoMenu, toggleDeleteAllTodoMenu } from './toggleMenus.js';
import iso from './isotope.js';
import { formatTodoTitle, formatTodoDescription } from './formatText.js';
import { flashError } from './flashError.js';

const createTodo = (todoTitle, todoDescription, todoCategory, todoDone) => ({
  todoTitle, todoDescription, todoCategory, todoDone,
});

const addTodo = (title, description, category, done) => {
  const todo = createTodo(
    title,
    description,
    category,
    done,
  );
  addTodoToArray(todo);
  const categoryIndex = categoriesArray
    .findIndex((cat) => cat.category === category) + 1;
  displayTodo(
    category,
    categoryIndex,
    title,
    description,
    done,
  );
  toggleAddTodoMenu();
};

const setAddTodoListener = () => {
  const addTodoBtn = document.querySelector('.add-add-new-todo-button');
  addTodoBtn.addEventListener('click', () => {
    const todoTitleInput = formatTodoTitle(document.querySelector('#add-todo-title').value);
    const todoDescriptionInput = formatTodoDescription(document.querySelector('#add-todo-description').value);
    const addCategoryBtns = document.querySelectorAll('.category-btn-add');
    let activeCategory = null;
    addCategoryBtns.forEach((addCategoryBtn) => {
      if (addCategoryBtn.classList.contains('active-category')) {
        activeCategory = addCategoryBtn;
      }
    });

    const todosArray = JSON.parse(localStorage.getItem('todosArray'));
    if (todosArray.length === 30) {
      flashError('You Cannot Have More Than 30 Todos');
    } else if (todosArray.some((todo) => todo.todoTitle === todoTitleInput)) {
      flashError('Todo Cannot Have Same Title As Existing Todo');
    } else if (todoTitleInput.length < 10) {
      flashError('Todo Name Cannot Be Less Than 10 Characters Long');
    } else if (todoTitleInput.length > 40) {
      flashError('Todo Name Cannot Be Greater Than 40 Characters Long');
    } else if (/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/.test(todoTitleInput)) {
      flashError('Todo Name Cannot Contain Any Special Characters');
    } else if (todoDescriptionInput.length < 20) {
      flashError('Todo Description Cannot Be Less Than 20 Characters Long');
    } else if (todoDescriptionInput.length > 300) {
      flashError('Todo Description Cannot Be Greater Than 300 Characters Long');
    } else if (activeCategory === null) {
      flashError('Todo Category Cannot Be Unselected');
    } else {
      addTodo(
        todoTitleInput,
        todoDescriptionInput,
        activeCategory.childNodes[1].textContent,
        false,
      );
    }
  });
};

const findCurrentTodo = () => {
  const todos = document.querySelectorAll('.todo');
  let currentTodo = null;
  todos.forEach((todo) => {
    if (todo.childNodes[1].classList.contains('show-todo-options')) {
      currentTodo = todo;
    }
  });
  return currentTodo;
};

const editTodo = () => {
  const currentTodo = findCurrentTodo();
  const todoTitle = currentTodo.childNodes[0].childNodes[0].childNodes[0];
  const todoDescription = currentTodo.childNodes[0].childNodes[1].childNodes[0];
  const newTodoTitle = document.querySelector('#edit-todo-title');
  const newTodoDescription = document.querySelector('#edit-todo-description');
  editTodoInArray(todoTitle.textContent, newTodoTitle.value, newTodoDescription.value);
  todoTitle.textContent = newTodoTitle.value;
  todoDescription.textContent = newTodoDescription.value;
  toggleEditTodoMenu();
};

const setEditTodoListener = () => {
  const editTodoBtn = document.querySelector('.add-edit-existing-todo-button');
  editTodoBtn.addEventListener('click', () => {
    editTodo();
  });
};

const deleteTodo = () => {
  const currentTodo = findCurrentTodo();
  const todoTitle = currentTodo.childNodes[0].childNodes[0].childNodes[0].textContent;
  iso.remove(currentTodo);
  iso.layout();
  deleteTodoFromArray(todoTitle);
  toggleDeleteTodoMenu();
};

const setDeleteTodoListener = () => {
  const deleteTodoBtn = document.querySelector('.delete-todo-button');
  deleteTodoBtn.addEventListener('click', () => {
    deleteTodo();
  });
};

const toggleDoneTodo = (e) => {
  const currentTodoHeading = e.currentTarget.parentElement.parentElement
    .parentElement.childNodes[0];
  const currentTodoDescription = e.currentTarget.parentElement.parentElement
    .parentElement.childNodes[1];
  currentTodoHeading.classList.toggle('done');
  currentTodoDescription.classList.toggle('done');

  const todoTitle = e.currentTarget.parentElement.parentElement
    .parentElement.childNodes[0].childNodes[0].textContent;
  toggleTodoDoneInArray(todoTitle);
};

const setDoneCheckboxes = () => {
  let doneCheckboxes = document.querySelectorAll('.done-checkbox');

  doneCheckboxes.forEach((doneCheckbox) => {
    doneCheckbox.replaceWith(doneCheckbox.cloneNode(true));
  });

  doneCheckboxes = document.querySelectorAll('.done-checkbox');

  doneCheckboxes.forEach(((doneCheckbox) => {
    doneCheckbox.addEventListener('change', (e) => {
      toggleDoneTodo(e);
    });
  }));
};

const deleteAllDoneTodos = () => {
  deleteAllDoneTodosInArray();
  const todos = document.querySelectorAll('.todo');

  todos.forEach((todo) => {
    if (todo.childNodes[0].childNodes[0].classList.contains('done')) {
      iso.remove(todo);
    }
  });
  iso.layout();
};

const setDeleteAllDoneTodosListener = () => {
  const deleteAllDoneTodosBtn = document.querySelector('.delete-all-todo-button');

  deleteAllDoneTodosBtn.addEventListener('click', () => {
    deleteAllDoneTodos();
    toggleDeleteAllTodoMenu();
  });
};

const setTodosController = () => {
  setAddTodoListener();
  setEditTodoListener();
  setDeleteTodoListener();
  setDeleteAllDoneTodosListener();
};

export { setTodosController, setDoneCheckboxes };