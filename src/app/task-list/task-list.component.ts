import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor(private route: ActivatedRoute){

  }

  date: Date = new Date()

  ngOnInit(): void {
     this.date = new Date(this.route.snapshot.params['date'])
  }

  tasks: Task[] = [
    new Task("doSmth 1"),
    new Task("doSmth 2"),
    new Task("doSmth 3"),
    new Task("doSmth 4")
  ]

  private checkIfTaskIsNotEmpty(task: string){
    return task && task !== "" 
  }

  add(task: string) {    
    if(this.checkIfTaskIsNotEmpty(task)){
      this.tasks.push(new Task(task))
    }        
  }

  remove(task: Task) {
    this.tasks = this.tasks.filter(t => t !== task)
  }

}


class Task {

  public isDone: boolean

  constructor(public title: string) {
    this.isDone = false
  }

  toggleIsDone() {
    this.isDone = !this.isDone;
  }

}


