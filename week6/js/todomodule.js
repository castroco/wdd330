const localTaskList = [
  {
    id: "1634697251612",
    content: "Buy gift",
    completed: false
  },
  {
    id: "1634697251613",
    content: "Pick up my friend",
    completed: true
  },
  {
    id: "1634697251614",
    content: "Football game",
    completed: false
  },
  {
    id: "1634697251615",
    content: "Prepare talk",
    completed: false
  }

];

var typeOfView = "All";

export default class Todolist {
  constructor(elementId) {
    this.parentElement = document.getElementById(elementId);

  }

  displayBasicList() {
    this.parentElement.appendChild(this.createList(localTaskList));
    /*this.parentElement.innerHTML=  `<ul>
          <li id="1634697251612" class="taskLine"><input type="checkbox"><p>Buy gift</p><input type="button" value="X"></li>
          <li id="1634697251612" class="taskLine"><input type="checkbox" checked><p>Pick up my friend</p><input type="button" value="X"></li>
          <li id="1634697251612" class="taskLine"><input type="checkbox"><p>Football game</p><input type="button" value="X"></li>
          <li id="1634697251612" class="taskLine"><input type="checkbox"><p>Prepare talk</p><input type="button" value="X"></li>
      </ul>
      <div id="buttonsDiv">
          <p id="taskLeft">3 Task Left</p><input type="button" value="All" id="allTasks" class="selected">
          <input type="button" value="Active" id="activeTasks" class="">
          <input type="button" value="Completed" id="completedTasks" class="">
      </div>
      <div id="addNewDiv">
          <input type="text"><input type="button" value="+">
      </div>`;*/
  }

  createList(listToDisplay){
    console.log("type of list received: ",typeof(listToDisplay));
    const listOfTasks = document.createElement("ul");
    listToDisplay.forEach( taskElem => {
      let individualTask = document.createElement("li");
      individualTask.id = taskElem.id;
      
      let checkboxInput = document.createElement("input")
      checkboxInput.type = "checkbox";
      checkboxInput.checked = taskElem.completed;
      checkboxInput.addEventListener('click', () => {
        this.completedClick(checkboxInput.checked, individualTask.id);
      });

      let inputButton = document.createElement("input");
      inputButton.type = "button";
      inputButton.value = "X";
      inputButton.addEventListener('click', () => {
        this.deleteTask(taskElem.id);
      });

      let paragraphTask = document.createElement("p")
      paragraphTask.innerHTML = taskElem.content;

      individualTask.appendChild(checkboxInput);
      individualTask.appendChild(paragraphTask);
      individualTask.appendChild(inputButton);

      listOfTasks.appendChild(individualTask);
    });

      let buttonsDiv = document.createElement("div");
      buttonsDiv.id = "buttonsDiv";

      let stateParagraph = document.createElement("p");
      stateParagraph.id = "taskLeft"
      stateParagraph.innerHTML = "3 Task Left";
      
      let allButton = document.createElement("input");
      allButton.type = "button";
      allButton.value = "All";
      allButton.id = "allTasks";
      allButton.addEventListener('click', () => {
        this.showAllTasks();
      });

      let activeButton = document.createElement("input");
      activeButton.type = "button";
      activeButton.value = "Active";
      activeButton.id = "activeTasks";
      activeButton.addEventListener('click', () => {
        this.showActiveTasks();
      });

      let completedButton = document.createElement("input");
      completedButton.type = "button";
      completedButton.value = "Completed";
      completedButton.id = "completedTasks";
      completedButton.addEventListener('click', () => {
        this.showCompletedTasks();
      });

      buttonsDiv.appendChild(stateParagraph);
      buttonsDiv.appendChild(allButton);
      buttonsDiv.appendChild(activeButton);
      buttonsDiv.appendChild(completedButton);

      listOfTasks.appendChild(buttonsDiv);


      let addNewDiv = document.createElement("div");
      addNewDiv.id = "addNewDiv";

      let newTaskInput = document.createElement("input");
      newTaskInput.type = 'text';

      let addTaskInput = document.createElement("input");
      addTaskInput.type = 'button';
      addTaskInput.value = "+";
      addTaskInput.addEventListener('click', () => {
        this.addNewTask(newTaskInput.value);
      });

      addNewDiv.appendChild(newTaskInput);
      addNewDiv.appendChild(addTaskInput);

      listOfTasks.appendChild(addNewDiv);


    return listOfTasks;

  }
  

  deleteTask(taskId) {
    alert(`The task id is: ${taskId}`);
    localTaskList.forEach(objectElem => {
      let indexOfElem = localTaskList.indexOf(objectElem);
      console.log("indexOfElem", indexOfElem);
      if (objectElem.id == taskId) {
          localTaskList.splice(indexOfElem,  1);
      }
    });
    if (typeOfView == "Active"){
      this.showActiveTasks();
    } else if(typeOfView == "Completed") {
      this.showCompletedTasks();
    } else {
      this.showAllTasks();
    }
  }

  completedClick(IsComplete, taskId) {
    localTaskList.forEach( taskElem => {
      console.log("type of taskElem",typeof(taskElem));
      if (taskElem.id == taskId) {
        taskElem.completed = IsComplete;
      }
    });
    console.table(localTaskList);
  }

  showAllTasks() {
    this.parentElement.innerHTML = '';
    this.parentElement.appendChild(this.createList(localTaskList));
    typeOfView = "All";
  }

  showActiveTasks() {
    let filteredList = localTaskList.filter(task => task.completed == false);
    console.log("node: ", this.parentElement.childNodes);
    this.parentElement.innerHTML = '';
    console.log("node: ", this.parentElement.childNodes);
    this.parentElement.appendChild(this.createList(filteredList));
    console.log("node: ", this.parentElement.childNodes);
    typeOfView = "Active";
  }

  showCompletedTasks() {
    let filteredList = localTaskList.filter(task => task.completed == true);
    this.parentElement.innerHTML = '';
    this.parentElement.appendChild(this.createList(filteredList));
    typeOfView = "Completed";
  }

  addNewTask(newTaskTodo) {
    localTaskList.push({
      id: Date.now(),
      content: newTaskTodo,
      completed: false
    })
    if (typeOfView == "Active"){
      this.showActiveTasks();
    } else if(typeOfView == "Completed") {
      this.showCompletedTasks();
    } else {
      this.showAllTasks();
    }
  }

}