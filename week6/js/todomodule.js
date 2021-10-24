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
  }

  showActiveTasks() {
    let filteredList = localTaskList.filter(task => task.completed == false);
    console.log("node: ", this.parentElement.childNodes);
    this.parentElement.innerHTML = '';
    console.log("node: ", this.parentElement.childNodes);
    this.parentElement.appendChild(this.createList(filteredList));
    console.log("node: ", this.parentElement.childNodes);
  }

  showCompletedTasks() {
    let filteredList = localTaskList.filter(task => task.completed == true);
    this.parentElement.innerHTML = '';
    this.parentElement.appendChild(this.createList(filteredList));
  }

  addNewTask(newTaskTodo) {
    localTaskList.push({
      id: Date.now(),
      content: newTaskTodo,
      completed: false
    })
    this.showActiveTasks();
  }

}




///// BORRRAR /////
  // why is this function necessary?  hikeList is not exported, and so it cannot be seen outside of this module. I added this in case I ever need the list of hikes outside of the module. This also sets me up nicely if my data were to move. I can just change this method to the new source and everything will still work if I only access the data through this getter.
  /*getAllHikes() {
    return hikeList;
  }
  // For the first stretch we will need to get just one hike.
  getHikeByName(hikeName) {
    return this.getAllHikes().find(hike => hike.name === hikeName);
  }
  //show a list of hikes in the parentElement
  showHikeList() {
    this.parentElement.innerHTML = '';
    renderHikeList(this.parentElement, this.getAllHikes())
    this.addHikeListener();
    this.backButton.classList.add('hide');
  }
  // show one hike with full details in the parentElement
  showOneHike(hikeName) {
    const hike = this.getHikeByName(hikeName);
    this.parentElement.innerHTML = '';
    this.parentElement.appendChild(renderOneHikeFull(hike));
    this.backButton.classList.remove('hide');
  }
  // in order to show the details of a hike ontouchend we will need to attach a listener AFTER the list of hikes has been built. The function below does that.
  addHikeListener() {
    // We need to loop through the children of our list and attach a listener to each, remember though that children is a nodeList...not an array. So in order to use something like a forEach we need to convert it to an array.
    const childrenArray = Array.from(this.parentElement.children);
    childrenArray.forEach(child => {
      child.addEventListener('click', e => {
        this.showOneHike(e.currentTarget.dataset.name);
      });
    });
  }

  buildBackButton() {
    console.log("button state: ", this.backButton);
    const buildBackButton = document.createElement("button");
    const div = document.createElement("div");
    buildBackButton.innerHTML = 'All Hikes';
    buildBackButton.addEventListener('click', () => {
      this.showHikeList()
    });
    buildBackButton.classList.add('hide');
    buildBackButton.classList.add('back-button');
    div.classList.add('button-div');
    div.appendChild(buildBackButton);
    this.parentElement.after(div);
    return buildBackButton;
  }
}
// methods responsible for building HTML.  Why aren't these in the class?  They don't really need to be, and by moving them outside of the exported class, they cannot be called outside the module...they become private.
function renderHikeList(parent, hikes) {
  hikes.forEach(hike => {
    parent.appendChild(renderOneHikeLight(hike));
  });
}
function renderOneHikeLight(hike) {
  const item = document.createElement("li");
  item.classList.add('specific-hike');
  item.setAttribute('data-name', hike.name);
  item.innerHTML = ` <h2>${hike.name}</h2>
  <div class="image"><img src="${hike.imgSrc}" alt="${hike.imgAlt}"></div>
  <div>
          <div>
              <h3>Distance</h3>
              <p>${hike.distance}</p>
          </div>
          <div>
              <h3>Difficulty</h3>
              <p>${hike.difficulty}</p>
          </div>
  </div>`;
  return item;
}
function renderOneHikeFull(hike) {
  const item = document.createElement("li");

  item.innerHTML = ` 
      
    <img src="${hike.imgSrc}" alt="${hike.imgAlt}" class="details-img">
    <h2>${hike.name}</h2>
    <div>
        <h3>Distance</h3>
        <p>${hike.distance}</p>
    </div>
    <div>
        <h3>Difficulty</h3>
        <p>${hike.difficulty}</p>
    </div>
    <div>
        <h3>Description</h3>
        <p>${hike.description}</p>
    </div>
    <div>
        <h3>How to get there</h3>
        <p>${hike.directions}</p>
    </div>`;

  return item;
}*/