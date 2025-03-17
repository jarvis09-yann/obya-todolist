class TodoList {
  static #content = {
    default: [],
  };
  static #currentID = -1;

  static getAll() {
    return this.#content;
  }

  static get(id, group) {
    if (group != undefined) {
      return this.#content[group];
    }
    for (let item in this.#content) {
      for (let val in item) {
        if (this.#content[item][val].id == id) {
          return this.#content[item][val];
        }
      }
    }
  }

  static add(item, group = "default") {
    if (!this.#content[group]) {
      this.#content[group] = [];
    }
    this.#content[group].push(item);
  }

  static set(group, itemID, field, newVal) {
    this.#content[group][itemID][field] = newVal;
  }

  static remove(group, itemID) {
    this.#content[group].splice(itemID, 1);
  }

  static getID() {
    this.#currentID += 1;
    return this.#currentID;
  }
}

class TodoItem {
  constructor(title, description, isDone, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.isDone = isDone;
    this.dueDate = dueDate;
    this.priority = priority;
    this.id = TodoList.getID();
  }
}

let x = new TodoItem(
  "Work!!!",
  "Lorem Ipsum dolor sit amet",
  false,
  new Date("March 17 2025 13:30"),
  3
);
console.log(x);
TodoList.add(x, "default");

for (let i = 0; i <= 10; i++) {
  TodoList.add(
    {
      title: "Work!!!",
      description: "Lorem Ipsum dolor sit amet",
      isDone: false,
      dueDate: new Date("2025-03-17T12:30:00.000Z"),
      priority: 3,
      id: TodoList.getID(),
    },
    "notdefault"
  );
}

console.log(TodoList.get(2));
console.log(TodoList.getAll());
TodoList.remove("default", 0);
