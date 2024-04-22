import './style.css';
import addIcon from './addicon.svg';
import createForm from './form.js';


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
        myIcon.setAttribute('class', 'icon');
        return myIcon;
    }

    appendElement(taskContainer) {
        const taskItem = this.taskItem();
        const icon1 = this.addIcon();
        const addTaskText = "Add Task Here";

        taskItem.appendChild(icon1);
        taskItem.append(addTaskText)
        taskContainer.append(taskItem);
        this.mainContent.appendChild(taskContainer);
        return this;
    }

    createNewTask() {
        const newTask = new TaskManager();
        newTask.appendElement(taskContainer);
        taskContainer.addEventListener('click', newTask.createNewTask)
        return this;
    }

};


class TaskContainer {
    constructor() {
        this.taskContainer = document.createElement('ul');
        this.taskContainer.setAttribute('class', 'task-container');
        return this.taskContainer;
    }

    taskItem() {
        const taskItem = document.createElement('li');
        taskItem.setAttribute('class', 'task-item');
        return taskItem;
    }
}
 
function init() {
    const task = new TaskManager();
    task.appendElement(taskContainer);
    taskContainer.addEventListener('click', task.createNewTask);
}

const taskContainer = new TaskContainer();

init();