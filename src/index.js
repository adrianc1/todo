import './style.css';
import addIcon from './addicon.svg';
import svg from './trash.svg'
import createForm from './form.js';
const header = document.getElementById('heading');
const mainContent = document.getElementById("main-content");
class TaskManager {
/*     constructor() {
        this.mainContent = document.getElementById("main-content");
    } */

    addIcon() {
        const myIcon = new Image();
        myIcon.src = addIcon;
        myIcon.setAttribute('id', 'icon');
        return myIcon;
    }

    static trashIcon() {
        const trash = new Image();
        trash.src = svg;
        trash.setAttribute('class', 'delete');
        return trash;
    }

    createNewTask() {
        const newTask = new TaskManager();
        newTask.appendTask(taskContainer.taskContainer);
        header.addEventListener('click', newTask.createNewTask);
        return this;
    }

    deleteTask() {
       const deletebtn = TaskManager.trashIcon();
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
        nav.append(taskContainerInstance.innerHTML)
    }
    taskItem() {
        const taskItem = document.createElement('li');
        taskItem.setAttribute('class', 'task-item');
        const addTaskText = "Add Task Here";
        taskItem.append(addTaskText)
        this.taskContainer.append(taskItem);
        return taskItem;
    }
    appendTask(taskContainer) {
        const deletebtn = TaskManager.trashIcon();
        taskContainer.append('hi');
/*         deletebtn.addEventListener('click', () => {
            taskItem.remove();
        }) */
        mainContent.append(taskContainer);
        console.log(taskContainer)
        return this
    }

    
};
 

/* initialize project */
function init() {
    const task = new TaskManager();
    const taskContainerInstance = new ProjectContainer();
    const addTaskIcon = task.addIcon();
    header.appendChild(addTaskIcon);
    mainContent.append('hi')
    console.log(taskContainerInstance)

/*     header.addEventListener('click', task.createNewTask);
    task.deleteTask(); */
}


init();

