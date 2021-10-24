//let day = Date.now();
//alert(day);
import Todolist from "./todomodule.js";
const todoList = new Todolist("todoListDiv");
window.addEventListener("load", () => {
  todoList.displayBasicList();
});
/*myHikes.hikeList;*/