import "./style.css";

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
