
import addIcon from './addicon.svg';

export class projectFolder {
    constructor(folderName) {
        this.folderName = folderName;
        this.listContainer = [1];
    }

    addFolderToNav() {
        const nav = document.getElementById('nav');
        nav.append(this.folderName);
        console.log(this.listContainer)
    }
}

export function createNewFolder() {
    const newFolder = new projectFolder(`${this.folderName}`);
    newFolder.addFolderToNav();
    
}

