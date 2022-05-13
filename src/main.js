//variables
const xmlns = "http://www.w3.org/2000/svg";
const xlinkns = "http://www.w3.org/1999/xlink";

var createButton = document.getElementById("todo__create");
var tasksList = document.getElementById("todo__items-container");
var taskform = document.getElementById("new_task_form");
var container = document.getElementById("todo__body");
var taskInput = document.getElementById("todo__input");

taskform.addEventListener("submit", function (e) {
  e.preventDefault();

  addItem(taskInput.value);

  taskInput.value = "";
});

const addItem = (itemText) => {
  const newTaskItem = document.createElement("li");
  newTaskItem.setAttribute("class", "task_item");

  const newCheckBtn = document.createElement("div");
  newCheckBtn.setAttribute("class", "todo__toggle");

  const newTaskBio = document.createElement("div");
  newTaskBio.setAttribute("class", "todo__text");
  
  const divDel = document.createElement("div");
  divDel.setAttribute("class", "todo__delete");
  
  const svgDel = document.createElement("svg");
  svgDel.setAttribute("viewBox", "0 0 150 150");
  
  const useDel = document.createElement("use");
  useDel.setAttribute("xlink:href", "#icon-delete");



  newTaskBio.innerText = itemText;

  tasksList.appendChild(newTaskItem);

  newTaskItem.appendChild(newCheckBtn);
  newTaskItem.appendChild(newTaskBio);
  newTaskItem.appendChild(divDel);
  
  divDel.appendChild(svgDel);
  svgDel.appendChild(useDel);
  
  onTaskComplete(newCheckBtn);
};

function onTaskComplete(btns) {
  btns.addEventListener("click", function (e) {
    var parent = e.toElement.parentElement;
    parent.classList.add("task-completed");
    setTimeout(() => {
      parent.remove();
    }, 400);

    if (tasksList.childNodes.length == 1) {
      setTimeout(() => {
        container.classList.add("task_list_empty");
      }, 800);
    }
  });
}

addEventListener("load", () => {
  addItem("Read the description please");
  addItem("Solve the task");
  addItem("Submit the solution");
});
