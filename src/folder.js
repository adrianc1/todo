
import addIcon from './addicon.svg';

export class projectFolder {
    constructor(folderName) {
        this.folderName = folderName;
        this.listContainer = [1];
    }

    addFolderToNav() {
        const nav = document.getElementById('nav');
        nav.append(this.folderName);
    }

    addTaskToFolder() {
        const nav = document.getElementById('nav');
        this.listContainer.push('shiiitt');
        this.listContainer.forEach(( item ) => {
            const li = document.createElement('li');
            li.setAttribute('class', 'task-item')
            li.append(item);
        })
    }
}


export function createNewFolder() {
/*     const folderContainer = document.createElement('ul');
    folderContainer.setAttribute('class', 'folder-list-item');  */
    let newFolderInput = prompt('folder name');
    /* folderContainer.append(newFolderInput) */
    const newFolderName = new projectFolder(newFolderInput);
    newFolderName.addFolderToNav();
    newFolderName.addTaskToFolder();
};

