import './style.css';
import { projectFolder, createNewFolder } from './folder.js'
import addIcon from './addicon.svg';
import svg from './trash.svg';
const header = document.getElementById('heading');
const test = document.querySelectorAll('folder-list-item')

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

    trashIcon() {
        const trash = new Image();
        trash.src = svg;
        trash.setAttribute('class', 'delete');
        return trash;
    }

    appendElement(container) {
        const taskItem = this.taskItem();
        const deletebtn = this.trashIcon();
        const addTaskItemText = "Add Task Here";
        taskItem.contentEditable = 'true';
        taskItem.append(addTaskItemText);
        taskItem.append(deletebtn)
        container.append(taskItem);
        deletebtn.addEventListener('click', () => {
            taskItem.remove();
        })
        this.mainContent.appendChild(container);
        return this;
    }

    createNewTask() {
        const newTask = new TaskManager();
        newTask.appendElement(container.container);
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
        this.container = document.createElement('ul');
        this.container.setAttribute('class', 'task-container');
        this.innerHTML = `Project #1`
    }
};
 

/* initialize project */
function init() {
    const nav = document.getElementById('nav');
    const task = new TaskManager();

    /* adding icons  */
    const addTaskBtn = task.addIcon();
    const addFolderBtn = task.addIcon();
    header.appendChild(addTaskBtn);
    nav.appendChild(addFolderBtn);

    /* adding folder to the nav onclick */
    addFolderBtn.addEventListener('click', createNewFolder)

    /* creating new task in main content onclick  */
    addTaskBtn.addEventListener('click', task.createNewTask);
    task.deleteTask();
}
const container = new ProjectContainer();
const nav = document.getElementById('nav');

nav.addEventListener("click", function(e) {
	// e.target is the clicked element!
	// If it was a list item
	if(e.target && e.target.nodeName == "ul") {
		// List item found!  Output the ID!
		console.log("List item ", e.target.id.replace("post-", ""), " was clicked!");
	}
});


init();

