
import addIcon from './addicon.svg';

export class projectFolder {
    constructor(folderName) {
        this.folderName = folderName;
        this.listContainer = [];
    }

    addFolderToNav() {
        const nav = document.getElementById('nav');
        const folderContainer = document.createElement('ul');
        folderContainer.setAttribute('class', 'folder-list-item');  
        folderContainer.append(this.folderName);
        nav.append(folderContainer);

        folderContainer.addEventListener('click', () => {
            if(this.folderName === "a") {
                alert(`${this.listContainer}`)
            } else if (this.folderName === "run") {
                alert('runnnnnn!')
            } else {
                alert('somethin fuck ed up')
            }
        })
    }
}

export function createNewFolder() {
    let newFolderInput = prompt('folder name'); 
    const newFolderName = new projectFolder(newFolderInput);
    newFolderName.addFolderToNav();
    
};

export function addTask() {
    let item = prompt('add list item:');
    
 }