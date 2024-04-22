export default function createForm() {
        /* create form elements */
        const mainContent = document.getElementById("main-content");
        const addTaskContainer = document.getElementById('task-container');
        const addTaskText = document.getElementById('task-text');
        const form = document.createElement('form');
        const input = document.createElement('input');
        const subBtn = document.createElement('input');
    
        /* set form element attributes */
        subBtn.setAttribute('type', 'submit')
        input.setAttribute('type', 'text');
    
        /* Hide 'Add Task' text */
        addTaskText.classList.add('hidden');
    
        /* append elements to form and to main content */
        form.appendChild(input);
        form.appendChild(subBtn);
        addTaskContainer.appendChild(form)
        mainContent.appendChild(addTaskContainer);
}