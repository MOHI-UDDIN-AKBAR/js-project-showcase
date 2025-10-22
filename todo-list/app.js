// DOM ELEMENTS
const notifier = document.querySelector(".todo-list__notify");
const form = document.querySelector(".todo-list__form");
const input = form.querySelector(".todo-list__form-field");
const todoList = document.querySelector(".todos__list");
const clearBtn = document.querySelector(".todo-list__clear-btn");

// CONSTANTS
const MESSAGES = {
  add: "Item added to the list",
  edit: "Todo item updated",
  remove: "Item removed from the list",
  clear: "All items cleared",
};

const STORAGE_KEY = "todos";

// STATE
let todos = loadTodos();

// UTILITIES

// load todos from localStorage
function loadTodos() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch (error) {
    console.error(error);
    return [];
  }
}

// Save todos to localStorage
function saveTodos() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

// clear LocalStorage data
function clearLocalStorage() {
  localStorage.removeItem(STORAGE_KEY);
}

// Capitalize the first letter of a todo
function formateTodoItem(todoItem) {
  return `${todoItem.at(0).toUpperCase()}${todoItem.slice(1)}`;
}

// temporary notification
function displayNotification(message, type) {
  notifier.textContent = message;
  notifier.classList.add(type);

  setTimeout(() => {
    notifier.classList.remove(type);
  }, 1000);
}

// DOM UPDATES

// render all todos
function renderTodoItems() {
  if (!todos.length) {
    todoList.innerHTML = "";
    return;
  }

  const html = todos
    .map((todoItem, index) => {
      return `<li class="todos__item" data-id="${index}">
              <p class="todos__item-name">${formateTodoItem(todoItem)}</p>
              <div class="todos__controls">
                <button type="button" class="todos__btn edit-btn">
                  <img
                    src="./../assets/icons/ui/edit-icon.svg"
                    alt="edit icon"
                    loading="lazy"
                    class="todos__icon"
                    width="20"
                    height="20"
                  /></button
                ><button type="button" class="todos__btn delete-btn">
                  <img
                    src="./../assets/icons/ui/delete-icon.svg"
                    alt="delete icon"
                    loading="lazy"
                    class="todos__icon"
                    width="20"
                    height="20"
                  />
                </button>
              </div>
            </li>`;
    })
    .join("");
  todoList.innerHTML = html;
}

// CRUD OPERATION

// add or edit todo item
function addOrEditTodoItem(text) {
  const id = parseInt(input.dataset.id);

  if (!Number.isNaN(id)) {
    todos[id] = text;
    delete input.dataset.id;
    //  input.removeAttribute("data-id");
    displayNotification(MESSAGES.edit, "success");
  } else {
    todos.push(text);
    displayNotification(MESSAGES.add, "success");
  }

  saveTodos();
  renderTodoItems();
}

// remove todo item
function removeTodoItem(id) {
  todos = todos.filter((_, i) => i !== Number(id));
  saveTodos();
  renderTodoItems();
  displayNotification(MESSAGES.remove, "error");
}

// clear all todo items
function clearAllTodos() {
  todos = [];
  clearLocalStorage();
  renderTodoItems();
  displayNotification(MESSAGES.clear, "error");
}

//  EVENT HANDLERS

// handle from submission
function handleFormSubmit(e) {
  e.preventDefault();
  const { todo } = Object.fromEntries(new FormData(form).entries());

  if (!todo.trim()) return;

  addOrEditTodoItem(todo);
  //   e.target.reset();
  form.reset();
}

// handle todo click
function handleTodoClick(e) {
  const todoItem = e.target.closest(".todos__item");

  if (!todoItem) return;

  const { id } = todoItem.dataset;

  const editBtn = e.target.closest(".edit-btn");
  const deleteBtn = e.target.closest(".delete-btn");

  if (editBtn) {
    input.value = todoItem.querySelector(".todos__item-name").textContent;
    input.dataset.id = id;
    // input.setAttribute("data-id", id);
    input.focus();
  }

  if (deleteBtn) {
    removeTodoItem(id);
  }
}

// EVENT LISTENERS
form.addEventListener("submit", (e) => handleFormSubmit(e));
todoList.addEventListener("click", (e) => handleTodoClick(e));
clearBtn.addEventListener("click", () => clearAllTodos());

// initial render
renderTodoItems();
