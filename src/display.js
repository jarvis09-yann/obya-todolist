export class displayController {
  constructor() {}

  static renderTodoItem(obj) {
    const todoItem = document.createElement("div");
    todoItem.classList.add("todolist-item");
    todolistContainer.appendChild(todoItem);

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
      case 2:
        priorityButton.classList.add("priority-2");
      case 3:
        priorityButton.classList.add("priority-3");
    }
    const editIcon = document.createElement("box-icon");
    editIcon.setAttribute("type", "solid");
    editIcon.setAttribute("name", "edit");
    editIcon.setAttribute("color", "#405d72");
    editIcon.setAttribute("class", "edit");

    const deleteIcon = document.createElement("box-icon");
    deleteIcon.setAttribute("type", "solid");
    deleteIcon.setAttribute("name", "trash-alt");
    deleteIcon.setAttribute("color", "darkred");
    deleteIcon.setAttribute("class", "delete");
  }
}
