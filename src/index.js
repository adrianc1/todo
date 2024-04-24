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
        deletebtn.addEventListener('click', () => {
            taskItem.remove();
        })
        this.mainContent.appendChild(taskContainer);
        return this;
    }

    createNewTask() {
        const newTask = new TaskManager();
        newTask.appendElement(taskContainer.taskContainer);
        header.addEventListener('click', newTask.createNewTask);
        return this;
    }

    deleteTask() {
       const deletebtn = this.trashIcon();
       deletebtn.addEventListener('click', () => {
            console.log('yeeee')
       })
    }
};

/* create task container  */
class ProjectContainer {
    constructor() {
        this.taskContainer = document.createElement('ul');
        this.taskContainer.setAttribute('class', 'task-container');
        this.innerHTML = `Project #1`
    }
    createProjectFolder() {
        const nav = document.getElementById('nav');
        nav.append(taskContainer.innerHTML)

    }
};
 

/* initialize project */
function init() {

    const task = new TaskManager();
    const addTask = task.addIcon();
    task.appendElement(taskContainer.taskContainer);
    
    header.appendChild(addTask);
    header.addEventListener('click', task.createNewTask);
    task.deleteTask();
}
const taskContainer = new ProjectContainer();
const test = taskContainer.createProjectFolder();


init();

