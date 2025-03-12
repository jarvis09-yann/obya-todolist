class todoList {
  static #myTodoList = {
    default: [],
  };
  static #id = 0;
  static add(task, category) {
    if (!this.#myTodoList[category]) {
      this.#myTodoList[category] = [];
    }
    this.#myTodoList[category].push(task);
  }

  static getID() {
    this.#id += 1;
    return this.#id;
  }

  static edit(ID, category, field, value) {
    let task = this.get(ID, category);
    task[0][field] = value;
  }

  static remove(ID, category) {
    this.get(ID, category) = []
  }

  static get(ID, category) {
    console.log(this.#myTodoList[category]);
    return this.#myTodoList[category].filter((task) => task.ID == ID);
  }

  static getAll() {
    return this.#myTodoList
  }
}

class Task {
  constructor(category, title, description, priority, isCompleted, ID) {
    this.category = category;
    this.data = {
      title: title,
      description: description,
      priority: priority,
      isCompleted: isCompleted,
      ID: ID,
    };
  }
}

let x = new Task("test", "Test", "Tst2", 1, false, todoList.getID());

todoList.add(x.data, x.category);
console.log(x.category);

console.log(todoList.getAll())
