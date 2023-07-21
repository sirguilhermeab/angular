import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reduxplusapi';

  todos: ITodo[] = [];
constructor( private http: HttpClient){}

ngOnInit(): void{

this.http.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos/')
.subscribe({
  next: (res) => this.todos = res
})
}
}


export interface ITodo {
userId: number;
id: number;
title: string;
completed: boolean;
}
