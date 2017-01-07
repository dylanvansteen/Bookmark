import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Folder, IFolderService } from '../contracts';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class FolderService implements IFolderService {
    constructor(private http: Http) {
    }

    get(): Observable<Folder> {
        return Observable.throw(new Error());
    }
}