import { Observable } from 'rxjs/Rx';

export interface IFolderService {
    get() : Observable<Folder>;
}

export class Folder {
    id: number;
    name: string;
    constructor(folder?: Folder) {
        if (folder) {
            this.id = folder.id;
            this.name = folder.name;
        }
    }
}