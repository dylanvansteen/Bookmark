import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Folder, IFolderService } from '../../contracts';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class MockFolderService implements IFolderService {
    folders: Array<Folder> = [
        { id: 1, name: "Home" },
        { id: 2, name: "Work" },
        { id: 3, name: "private" },
    ]

    constructor() {
    }

    get(): Observable<Folder[]> {
        return Observable.of(this.folders);
    }
}