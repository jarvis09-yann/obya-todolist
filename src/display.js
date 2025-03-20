const todolistContainer = document.querySelector(".todolist-container");

export class DisplayController {
  constructor() {}

  static renderItem(obj) {
    const todoItem = document.createElement("div");
    todoItem.classList.add("todolist-item");
    todolistContainer.appendChild(todoItem);
    const todoCheckbox = document.createElement("input");
    todoCheckbox.setAttribute("type", "checkbox");
    todoItem.appendChild(todoCheckbox);
    const todoTitle = document.createElement("h2");
    todoTitle.textContent = obj.title;
    todoItem.appendChild(todoTitle);

    const todoContent = document.createElement("p");
    todoContent.textContent = obj.description;
    todoItem.appendChild(todoContent);

    const todoButtonContainer = document.createElement("div");
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

    const editIcon = document.createElement("box-icon");
    editIcon.setAttribute("type", "solid");
    editIcon.setAttribute("name", "edit");
    editIcon.setAttribute("color", "#405d72");
    editIcon.setAttribute("class", "edit");
    todoButtonContainer.appendChild(editIcon);

    const deleteIcon = document.createElement("box-icon");
    deleteIcon.setAttribute("type", "solid");
    deleteIcon.setAttribute("name", "trash-alt");
    deleteIcon.setAttribute("color", "darkred");
    deleteIcon.setAttribute("class", "delete");
    todoButtonContainer.appendChild(deleteIcon);
  }

  static clear() {
    todolistContainer.innerHTML = "";
  }

  static renderAll(array) {
    this.clear();
    for (let element in array) {
      DisplayController.renderItem(array[element]);
    }
  }
}
