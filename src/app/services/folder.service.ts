import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class FolderService implements IFolderService {
    constructor(private http: Http) {
    }

    get(): Observable<Folder[]> {
        return Observable.throw(new Error());
    }
}

export interface IFolderService {
    get(): Observable<Folder[]>;
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