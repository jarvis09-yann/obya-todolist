import { TodoList } from "./todos";

const todolistContainer = document.querySelector(".todolist-container");

export class DisplayController {
  static #category = "default";
  constructor() {}
  static renderItem(obj) {
    const todoItem = document.createElement("div");
    todoItem.classList.add("todolist-item");
    todolistContainer.appendChild(todoItem);

    const todoCheckbox = document.createElement("input");
    todoCheckbox.setAttribute("type", "checkbox");
    todoItem.appendChild(todoCheckbox);

    todoCheckbox.addEventListener("click", () => {
      if (todoCheckbox.checked) {
        TodoList.set(obj.id, "isDone", true);
        todoCheckbox.parentElement.style.textDecoration = "line-through";
        todoCheckbox.parentElement.style.color = "gray";
      } else {
        TodoList.set(obj.id, "isDone", false);
        todoCheckbox.parentElement.style.textDecoration = "none";
        todoCheckbox.parentElement.style.color = "inherit";
      }
      console.log(TodoList.getAll());
    });

    const todoTitle = document.createElement("h2");
    todoTitle.textContent = obj.title;
    todoItem.appendChild(todoTitle);

    const todoContent = document.createElement("p");
    todoContent.textContent = obj.description;
    todoItem.appendChild(todoContent);

    const todoButtonContainer = document.createElement("div");
    todoButtonContainer.classList.add("action-buttons");
    todoButtonContainer.id = obj.id;
    todoItem.appendChild(todoButtonContainer);

    const priorityButton = document.createElement("div");
    priorityButton.classList.add("priority");
    switch (obj.priority) {
      case 1:
        priorityButton.classList.add("priority-1");
        break;
      case 2:
        priorityButton.classList.add("priority-2");
        break;
      case 3:
        priorityButton.classList.add("priority-3");
        break;
      default:
        priorityButton.classList.add("priority-1");
        break;
    }
    todoButtonContainer.appendChild(priorityButton);

    const editIcon = document.createElement("div");
    editIcon.innerHTML =
      '<box-icon type="solid" name="edit" color="#405d72" class="edit"></box-icon>';
    todoButtonContainer.appendChild(editIcon);

    const deleteIcon = document.createElement("div");
    deleteIcon.innerHTML =
      '<box-icon type="solid" name="trash-alt" color="darkred" class="delete"></box-icon>';
    todoButtonContainer.appendChild(deleteIcon);

    todoButtonContainer.addEventListener("click", (e) => {
      if (e.target.classList.contains("edit")) {
        console.log("edit");
        console.log(e.target.parentElement.parentElement.id);
      } else if (e.target.classList.contains("delete")) {
        TodoList.remove(e.target.parentElement.parentElement.id);
      } else if (e.target.classList.contains("priority")) {
        updatePriority(e.target.parentElement.id, e.target.classList[1]);
      }
      this.renderAll();
    });
  }

  static clear() {
    todolistContainer.innerHTML = "";
  }

  static setCategory(category) {
    this.#category = category;
  }

  static renderAll() {
    this.clear();
    for (let element in this.#category) {
      DisplayController.renderItem(this.#category[element]);
    }
  }
}

function updatePriority(id, CurrentPriority) {
  switch (CurrentPriority) {
    case "priority-1":
      TodoList.set(id, "priority", 2);
      break;
    case "priority-2":
      TodoList.set(id, "priority", 3);
      break;
    case "priority-3":
      TodoList.set(id, "priority", 1);
      break;
  }
  DisplayController.renderAll();
}
