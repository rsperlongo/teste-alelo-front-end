import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { TaskList } from "./task-list";

@Injectable()
export class TaskListService {
    private url = 'http://unusualdev.com/api/Lists/byTypeId/[id]'


    constructor( private http: HttpClient ){}

    getList(id: number): Observable<TaskList[]>{

         const url = `${this.url}/?id=${id}`;

        return this.http.get<TaskList[]>(this.url);

    }
}