import { Component, OnInit } from '@angular/core';
import { TaskListService } from './task-list.service';
import { TaskList } from './task-list';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  tasklist: TaskList[];

  constructor( private tasklistservice: TaskListService) { }

  ngOnInit() {
    this.showList()
  }

  showList(): void {
    this.tasklistservice.getList(1)
    .subscribe(tasklist => this.tasklist = tasklist);
  }

}
