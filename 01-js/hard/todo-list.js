/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.todos = []; // Initialize an empty array to hold todos
  }

  // Adds a new todo to the list
  add(todo) {
    if (typeof todo !== "string" || todo.trim() === "") {
      throw new Error("Todo must be a non-empty string.");
    }
    this.todos.push(todo);
  }

  // Removes a todo by its index
  remove(indexOfTodo) {
    if (this.todos.length === 0) {
      throw new Error("No todos to remove.");
    }
    if (indexOfTodo < 0 || indexOfTodo >= this.todos.length) {
      throw new Error(
        `Invalid index. Must be between 0 and ${this.todos.length - 1}.`
      );
    }
    this.todos.splice(indexOfTodo, 1);
  }

  // Updates a todo at a specific index
  update(index, updatedTodo) {
    if (this.todos.length === 0) {
      throw new Error("No todos to update.");
    }
    if (index < 0 || index >= this.todos.length) {
      throw new Error(
        `Invalid index. Must be between 0 and ${this.todos.length - 1}.`
      );
    }
    if (typeof updatedTodo !== "string" || updatedTodo.trim() === "") {
      throw new Error("Updated todo must be a non-empty string.");
    }
    this.todos[index] = updatedTodo;
  }

  // Returns all todos
  getAll() {
    return this.todos;
  }

  // Returns a todo by its index
  get(indexOfTodo) {
    if (this.todos.length === 0) {
      throw new Error("No todos available.");
    }
    if (indexOfTodo < 0 || indexOfTodo >= this.todos.length) {
      throw new Error(
        `Invalid index. Must be between 0 and ${this.todos.length - 1}.`
      );
    }
    return this.todos[indexOfTodo];
  }

  // Clears the todo list
  clear() {
    this.todos = [];
  }
}

module.exports = Todo;
