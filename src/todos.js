export class TodoList {
  static #content = {
    default: [],
  };
  static #currentID = -1;

  // Mostly used for debugging, probably will be removed sooner or later
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
    this.save();
  }

  static set(itemID, field, newVal) {
    for (let g in this.#content) {
      // repeated code but dont really care :)
      for (let i in this.#content[g]) {
        if (this.#content[g][i].id == itemID) {
          this.#content[g][i][field] = newVal;
        }
      }
    }
    this.save();
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
        }
      }
    }
    this.save();
  }

  static getID() {
    this.#currentID += 1;
    this.save();
    return this.#currentID;
  }

  static save() {
    localStorage.setItem("todoList", JSON.stringify(this.#content));
    localStorage.setItem("currentID", JSON.stringify(this.#currentID));
    console.log("saved");
  }

  static load() {
    if (
      !localStorage.getItem("todoList") ||
      !localStorage.getItem("currentID")
    ) {
      return;
    }
    this.#content = JSON.parse(localStorage.getItem("todoList"));
    this.#currentID = JSON.parse(localStorage.getItem("currentID"));
    console.log("loaded");
  }
}
