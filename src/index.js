import "./style.css";
import "./todos.js";
import "./display.js";
import { TodoList } from "./todos.js";
TodoList.load();

import { DisplayController } from "./display.js";

const sidebarCollapse = document.querySelector("#sidebar-collapse");
const todolistContainer = document.querySelector(".todolist-container");

sidebarCollapse.addEventListener("click", () => {
  if (sidebarCollapse.classList.contains("enabled")) {
    sidebarCollapse.classList.remove("enabled");
    sidebarCollapse.innerHTML = `
    <style> aside > * > * > p {
  display: none !important;
}

.user-profile {
  display: none !important;
}

.sidebar-item {
  width: 65px !important;
}

aside {
  width: 100px !important;
  .top-bar {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
  body {
  grid-template-columns: 100px 5fr;}
 </style>
    `;
  } else {
    sidebarCollapse.classList.add("enabled");
    sidebarCollapse.innerHTML = "";
  }
});

// for (let i = 0; i <= 100; i++) {
//   TodoList.add(
//     `Item ${i}`,
//     "Lorem Ipsum dolor sit amet",
//     false,
//     new Date("March 17 2025 13:30"),
//     3
//   );
// }

DisplayController.setCategory(TodoList.get(0, "default"));
DisplayController.renderAll();
