export class TodoList {
  static #content = {
    default: [],
  };
  static #currentID = -1;

  static getAll() {
    return this.#content;
  }

  static get(id, group = "") {
    if (group != "") {
      return this.#content[group];
    }
    for (let g in this.#content) {
      for (let i in this.#content[g]) {
        if (this.#content[g][i].id == id) {
          return this.#content[g][i];
        }
      }
    }
  }

  static add(title, description, isDone, dueDate, priority, group = "default") {
    let todoItem = {
      title: title,
      description: description,
      isDone: isDone,
      dueDate: dueDate,
      priority: priority,
      id: TodoList.getID(),
    };
    if (!this.#content[group]) {
      this.#content[group] = [];
    }
    this.#content[group].push(todoItem);
  }

  static set(group, itemID, field, newVal) {
    this.#content[group][itemID][field] = newVal;
  }

  static remove(itemID, group = "") {
    if (group != "") {
      delete this.#content[group];
    }
    for (let g in this.#content) {
      // repeated code but dont really care :)
      for (let i in this.#content[g]) {
        if (this.#content[g][i].id == itemID) {
          this.#content[g].splice(i, 1);
          console.log(g);
          return 1;
        }
      }
    }
    return 0;
  }

  static getID() {
    this.#currentID += 1;
    return this.#currentID;
  }
}

TodoList.add(
  "Work!!!",
  "Lorem Ipsum dolor sit amet",
  false,
  new Date("March 17 2025 13:30"),
  3
);
TodoList.add(
  "A title",
  "A description",
  false,
  new Date("March 17 2025 13:30"),
  3,
  "acustmgroup"
);

for (let i = 0; i <= 10; i++) {
  TodoList.add(
    `Item ${i}`,
    "Lorem Ipsum dolor sit amet",
    false,
    new Date("March 17 2025 13:30"),
    3
  );
}

console.log(TodoList.remove(0));
console.log(TodoList.get(0));
console.log(TodoList.get(1));
console.log(TodoList.getAll());
