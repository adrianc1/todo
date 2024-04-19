import './style.css';
import addIcon from './addicon.svg';


/* need to finish building out module class for this app */
class taskManager {
    constructor(mainContent) {
        this.mainContent = mainContent;
    }
    addTaskContainer() {
        const addTaskContainer = document.createElement('div');
        addTaskContainer.setAttribute('id', 'task-container');
        return addTaskContainer;
    }
};

/* Create HTML Elements */


const addTaskText = document.createElement('span');

addTaskText.innerHTML = 'Add Task here';

/* create add icon */
const myIcon = new Image();
myIcon.src = addIcon;

/* Set element attributes */
myIcon.setAttribute('id', 'icon');
addTaskText.setAttribute('id',  'task-text');


/* Append containers to main content */
addTaskContainer.appendChild(myIcon);
addTaskContainer.appendChild(addTaskText);
mainContent.appendChild(addTaskContainer)


/* Populate input field on clicking text */
addTaskText.addEventListener('click', inputTask);

function inputTask() {
    const input = document.createElement('input');
    addTaskText.classList.add('hidden');

    addTaskContainer.appendChild(input);
}