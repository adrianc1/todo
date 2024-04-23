import './style.css';
import addIcon from './addicon.svg';
import svg from './trash.svg'
import createForm from './form.js';
const header = document.getElementById('heading');

class TaskManager {
    constructor() {
        this.mainContent = document.getElementById("main-content");
    }

    taskItem() {
        const taskItem = document.createElement('li');
        taskItem.setAttribute('class', 'task-item');
        return taskItem;
    }

    addIcon() {
        const myIcon = new Image();
        myIcon.src = addIcon;
        myIcon.setAttribute('id', 'icon');
        return myIcon;
    }

    trashIcon() {
        const trash = new Image();
        trash.src = svg;
        trash.setAttribute('class', 'delete');
        return trash;
    }

    appendElement(taskContainer) {
        const taskItem = this.taskItem();
        const deletebtn = this.trashIcon();
        const addTaskText = "Add Task Here";
        taskItem.contentEditable = 'true';
        taskItem.append(addTaskText);
        taskItem.append(deletebtn)
        taskContainer.append(taskItem);
        this.mainContent.appendChild(taskContainer);
        return this;
    }

    createNewTask() {
        const newTask = new TaskManager();
        newTask.appendElement(taskContainer);
        header.addEventListener('click', newTask.createNewTask);
        return this;
    }

};

class TaskContainer {
    constructor() {
        this.taskContainer = document.createElement('ul');
        this.taskContainer.setAttribute('class', 'task-container');
        return this.taskContainer;
    }
};
 
/* initialize project */
function init() {
    const task = new TaskManager();
    task.appendElement(taskContainer);
    header.appendChild(task.addIcon())
    header.addEventListener('click', task.createNewTask);
}
const taskContainer = new TaskContainer();

init();